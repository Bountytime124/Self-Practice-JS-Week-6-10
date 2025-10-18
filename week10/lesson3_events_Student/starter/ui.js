import { addQuote, deleteQuote, updateQuote, getAllQuotes } from './quote.js';

// --- State and DOM Element Selection ---

// Initialize quotes from the data store
let currentQuotes = getAllQuotes(); 

// Select DOM elements
const quoteList = document.getElementById('quote-list');
const form = document.getElementById('quoteForm');
const contentInput = document.getElementById('content');
const authorInput = document.getElementById('author');
const idInput = document.getElementById('quoteId');
const randomBtn = document.getElementById('randomBtn');
const randomDisplay = document.getElementById('randomQuoteDisplay');

// --- Helper Functions and DOM Manipulation ---

function createQuoteElement(quote) {
  const quoteDiv = document.createElement('div');
  quoteDiv.setAttribute('data-id', quote.id);

  const contentP = document.createElement('p');
  contentP.textContent = quote.content;

  const authorP = document.createElement('p');
  authorP.textContent = quote.author;

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.setAttribute('data-id', quote.id);
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', handleEditClick);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.setAttribute('data-id', quote.id);
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', handleDeleteClick);

  quoteDiv.append(contentP, authorP, editBtn, deleteBtn);
  return quoteDiv;
}

function addQuoteToDOM(quote) {
  const quoteElement = createQuoteElement(quote);
  quoteList.prepend(quoteElement);
}

function updateQuoteInDOM(quote) {
  const quoteDiv = quoteList.querySelector(`div[data-id="${quote.id}"]`);
  if (quoteDiv) {
    quoteDiv.querySelector('p:first-child').textContent = quote.content;
    quoteDiv.querySelector('p:last-of-type').textContent = quote.author;
  }
}

function deleteQuoteFromDOM(id) {
  const quoteDiv = quoteList.querySelector(`div[data-id="${id}"]`);
  if (quoteDiv) {
    quoteDiv.remove();
    // Clear random quote display if the deleted quote was the one displayed
    const randomQuoteId = randomDisplay.getAttribute('data-id');
    if (randomQuoteId && Number(randomQuoteId) === id) {
        randomDisplay.textContent = 'Quote deleted.';
        randomDisplay.removeAttribute('data-id');
    }
  }
}

function renderQuotes() {
  quoteList.innerHTML = '';
  currentQuotes.forEach(quote => {
    const quoteElement = createQuoteElement(quote);
    quoteList.appendChild(quoteElement);
  });
}

function showRandomQuote() {
  if (currentQuotes.length === 0) {
    randomDisplay.textContent = 'No quotes available.';
    randomDisplay.removeAttribute('data-id');
    return;
  }
  const randomIndex = Math.floor(Math.random() * currentQuotes.length);
  const randomQuote = currentQuotes[randomIndex];
  randomDisplay.textContent = `"${randomQuote.content}" - ${randomQuote.author}`;
  randomDisplay.setAttribute('data-id', randomQuote.id);
}

// --- Event Handlers ---

function handleFormSubmit(e) {
  e.preventDefault();

  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  const id = idInput.value ? Number(idInput.value) : null; 

  if (!content || !author) return;

  let resultQuote;
  if (id) {
    // Edit existing quote
    resultQuote = updateQuote(id, content, author);
    if (resultQuote) {
        updateQuoteInDOM(resultQuote);
        const randomQuoteId = randomDisplay.getAttribute('data-id');
        if (randomQuoteId && Number(randomQuoteId) === id) {
             randomDisplay.textContent = `"${resultQuote.content}" - ${resultQuote.author}`;
        }
    }
  } else {
    // Add new quote
    resultQuote = addQuote(content, author);
    if (resultQuote) {
        currentQuotes.unshift(resultQuote);
        addQuoteToDOM(resultQuote);
    }
  }

  // Reset form
  form.reset();
  idInput.value = '';
}

function handleEditClick(e) {
  const id = Number(e.target.getAttribute('data-id'));
  const quoteToEdit = currentQuotes.find(q => q.id === id);

  if (quoteToEdit) {
    contentInput.value = quoteToEdit.content;
    authorInput.value = quoteToEdit.author;
    idInput.value = quoteToEdit.id;
    form.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleDeleteClick(e) {
  const id = Number(e.target.getAttribute('data-id'));
  const index = currentQuotes.findIndex(q => q.id === id);

  if (index !== -1) {
    if (deleteQuote(id) !== -1) {
        currentQuotes.splice(index, 1);
        deleteQuoteFromDOM(id);
    }
  }
}

function handleRandomBtnClick() {
  showRandomQuote();
}

// --- Initialization and Event Listeners ---

renderQuotes();

form.addEventListener('submit', handleFormSubmit);
randomBtn.addEventListener('click', handleRandomBtnClick);