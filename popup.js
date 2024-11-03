document.getElementById("generate").addEventListener("click", async () => {
    const prompt = document.getElementById("prompt").value;
    if (!prompt) return;

    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "<p>Generating...</p>";

    try {
        const url = "https://image.pollinations.ai/prompt";
        imageContainer.innerHTML = `<img src="https://image.pollinations.ai/prompt/${prompt}" alt="Generated Image">`;


    } catch (error) {
        imageContainer.innerHTML = "<p>Error generating image.</p>";
        console.error(error);
    }
}); 



//   .......................................................................................

const signInTab = document.getElementById("signInTab");
const newAccountTab = document.getElementById("newAccountTab");

// Function to handle tab switching
function activateTab(tab) {
    // Remove 'active' class from both tabs
    signInTab.classList.remove("active");
    newAccountTab.classList.remove("active");

    // Add 'active' class to the selected tab
    tab.classList.add("active");
}

// Event listeners to switch tabs on click
signInTab.addEventListener("click", () => activateTab(signInTab));
newAccountTab.addEventListener("click", () => activateTab(newAccountTab));
