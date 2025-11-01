document.getElementById("suggestionForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("userName").value;
    const suggestion = document.getElementById("userSuggestion").value;

    alert(`Thank you, ${name}! Your suggestion has been submitted.\n\n"${suggestion}"`);

    document.getElementById("suggestionForm").reset();
});
