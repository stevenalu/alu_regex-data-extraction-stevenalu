// Regular Expression Patterns for extracting data

const RegExPatterns = {
  emails: /\b[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}\b/g,
  phoneNumbers: /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
  urls:  /https?:\/\/(?:www\.)?[a-zA-Z0-9./?=#&_%-]+/g,
  creditCards: /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g,
  currency: /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g,
  time: /\b(?:[01]?\d|2[0-3]):[0-5]\d(?:\s?[APap][Mm])?\b/g,
  htmlTags: /<[^>]+>/g,
  hashtags: /#\w+/g
};

// Function to extract data if matched with the patterns

const extractData = (text) => {
  return Object.fromEntries(
      Object.entries(RegExPatterns).map(([key, pattern]) => [key, text.match(pattern) || []])
  );
};

// Sample input text for testing

const sampleText = `
  Email: user@example.com, firstname.lastname@company.co.uk, p.cyubahiro@alustudent.com, info@raisethemfoundation.org
  Phone: (123) 456-7890, 123-456-7890, 123.456.7890
  URL: https://www.example.com, https://subdomain.example.org/page, https://www.alueducation.com
  Credit Card: 1234 5678 9012 3456, 1234-5678-9012-3456
  Time: 14:30, 2:30 PM
  HTML: <p>Paragraph</p>, <div class="example">Content</div>, <img src="image.jpg" alt="description">
  Hashtags: #example, #ThisIsAHashtag
  Currency: $19.99, $1,234.56
`;

// Print out the extractions

console.log("According to the expressions the following are the fetched data:\n")
console.log(extractData(sampleText));
