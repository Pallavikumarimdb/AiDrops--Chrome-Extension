
document.getElementById("generatetext").addEventListener("click", async () => {
    const prompt1 = document.getElementById("prompttext").value;
    if (!prompt1) return;


    const contentFrame = document.getElementById("contentFrame");
    contentFrame.innerHTML = "<p>Generating...</p>";
  
    try {
    const url = "https://text.pollinations.ai/"+prompt1;
    document.getElementById("contentFrame").src = url;


    } catch (error) {
        textContainer.innerHTML = "<p>Error generating image.</p>";
      console.error(error);
    }
  });