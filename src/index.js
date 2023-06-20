function handleJournalForm() {
    event.preventDefault();
    document.querySelector('#response').innerText = null;
    const length2 = parseInt(document.querySelector('#length2').value);
    const length1 = parseInt(document.querySelector('#length1').value);
    const length3 = parseInt(document.querySelector('#length3').value);
    const journal = new Journal(length1, length2, length3);
    const response = journal.checkType();
    const pTag = document.createElement("p");
    pTag.append(response);
    document.querySelector('#response').append(pTag);
  }
  
  window.addEventListener("load", function() {
    document.querySelector("#journal-checker-form").addEventListener("submit", handleTriangleForm);
  });