(function () {
  let shown = false;

  function detectDevTools() {
    if (!shown) {
      shown = true;

      const titleStyle = `
    color: #00ffcc;
    font-size: 16px;
    font-weight: bold;
  `;

      const textStyle = `
    color: #ccc;
    font-size: 13px;
  `;

      console.log("%c👋 Hey there, developer!", titleStyle);
      console.log("%cCurious minds make great engineers.", textStyle);
      console.log(
        "%cIf you like what you see, let’s build something together.",
        textStyle,
      );
    }

     debugger;
  }

  setInterval(detectDevTools, 1000);
})();
