const fs = require('fs');

const inputPath = 'questions.csv';
const outputPath = 'data.js';

function parseCsvQuestions(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return null;

  const headers = lines[0].split(',').map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const values = line.split(',');
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] ? values[index].trim() : '';
    });
    return obj;
  });
}

function splitHpSections(text) {
  const matches = [...text.matchAll(/(?:^|\n)\s*Đây\s+là\s+HP\s*([12])\b/gi)];

  if (matches.length === 0) {
    return [{ key: 'HP1', text }];
  }

  const sections = [];
  matches.forEach((match, index) => {
    const hpNumber = match[1];
    const start = match.index;
    const end = matches[index + 1] ? matches[index + 1].index : text.length;
    const sectionText = text.slice(start, end);
    sections.push({ key: `HP${hpNumber}`, text: sectionText });
  });

  return sections;
}

function parseWordStyleSection(text, subjectKey) {
  const blocks = [];
  const answerPattern = /ANSWER\s*:\s*([A-D])/gi;
  let lastIndex = 0;

  for (const match of text.matchAll(answerPattern)) {
    const blockText = text.slice(lastIndex, match.index);
    lastIndex = match.index + match[0].length;

    if (!blockText.trim()) continue;

    blocks.push({
      blockText,
      answer: match[1].toUpperCase()
    });
  }

  return blocks.map((entry, index) => {
    const body = entry.blockText.replace(/\s+/g, ' ').trim();
    const headingMatch = body.match(/^(?:BÀI|BAI)\s*(\d+)\s*:\s*/i);
    const category = headingMatch ? `Chương ${headingMatch[1]}` : 'Chương 1';
    const normalizedBody = headingMatch ? body.replace(headingMatch[0], '').trim() : body;
    const firstOptionIndex = normalizedBody.search(/\b[A-D]\s*[,\.]/i);

    if (firstOptionIndex < 0) {
      return null;
    }

    const question = normalizedBody.slice(0, firstOptionIndex).trim();
    const optionsText = normalizedBody.slice(firstOptionIndex);
    const optionParts = optionsText.split(/\s+(?=[A-D]\s*[,\.])/gi);
    const options = {};

    for (const part of optionParts) {
      const match = part.match(/^\s*([A-D])\s*[,\.]\s*(.*)$/is);
      if (!match) continue;
      const key = match[1].toUpperCase();
      options[key] = match[2].replace(/\s+/g, ' ').trim();
    }

    if (!question || Object.keys(options).length < 4) {
      return null;
    }

    return {
      id: index + 1,
      category,
      question: question.replace(/\s+/g, ' ').trim(),
      options: {
        A: options.A || '',
        B: options.B || '',
        C: options.C || '',
        D: options.D || ''
      },
      answer: entry.answer
    };
  }).filter(Boolean);
}

function buildData(rawText) {
  const hpSections = splitHpSections(rawText);
  const subjectMap = {};

  hpSections.forEach((section) => {
    const questions = parseWordStyleSection(section.text, section.key);
    const code = section.key;

    subjectMap[code] = {
      name: code,
      icon: code === 'HP1' ? '📘' : '📗',
      description: code === 'HP1' ? 'Học phần 1' : 'Học phần 2',
      questions: questions
    };
  });

  if (!subjectMap.HP1 && !subjectMap.HP2) {
    const rows = parseCsvQuestions(rawText);
    if (!rows || rows.length === 0) {
      throw new Error('File questions.csv không đúng định dạng.');
    }

    return {
      HP1: {
        name: 'HP1',
        icon: '📘',
        description: 'Học phần 1',
        questions: rows.map((row, index) => ({
          id: Number(row.id || index + 1),
          category: row.category || 'Chương 1',
          question: row.question || '',
          options: {
            A: row.A || row.options?.A || '',
            B: row.B || row.options?.B || '',
            C: row.C || row.options?.C || '',
            D: row.D || row.options?.D || ''
          },
          answer: (row.answer || row.options?.answer || '').toUpperCase()
        }))
      }
    };
  }

  return subjectMap;
}

const rawText = fs.readFileSync(inputPath, 'utf8');
const firstNonEmptyLine = rawText.split(/\r?\n/).find((line) => line.trim() !== '');

if (firstNonEmptyLine && /^id\s*,\s*category\s*,/i.test(firstNonEmptyLine)) {
  const rows = parseCsvQuestions(rawText);
  if (!rows || rows.length === 0) {
    throw new Error('CSV không hợp lệ.');
  }

  const subjectsData = {
    HP1: {
      name: 'HP1',
      icon: '📘',
      description: 'Học phần 1',
      questions: rows.map((row, index) => ({
        id: Number(row.id || index + 1),
        category: row.category || 'Chương 1',
        question: row.question || '',
        options: {
          A: row.A || row.options?.A || '',
          B: row.B || row.options?.B || '',
          C: row.C || row.options?.C || '',
          D: row.D || row.options?.D || ''
        },
        answer: (row.answer || row.options?.answer || '').toUpperCase()
      }))
    }
  };

  const content = `const subjectsData = ${JSON.stringify(subjectsData, null, 4)};\n`;
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`Đã tạo xong ${outputPath} với ${subjectsData.HP1.questions.length} câu hỏi.`);
  process.exit(0);
}

const subjectsData = buildData(rawText);
const content = `const subjectsData = ${JSON.stringify(subjectsData, null, 4)};\n`;
fs.writeFileSync(outputPath, content, 'utf8');
const totalQuestions = Object.values(subjectsData).reduce((sum, subject) => sum + (subject.questions?.length || 0), 0);
console.log(`Đã tạo xong ${outputPath} với tổng ${totalQuestions} câu hỏi.`, Object.keys(subjectsData));
