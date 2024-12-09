/* document.write("This is a javascript Code"); */

function changeBackgroundTheme() {
  const currentBackgroundColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`--backgroundColor`)
    .trim(); // Entferne Leerzeichen für präzisen Vergleich
  if (currentBackgroundColor === "beige") {
    document.documentElement.style.setProperty(`--backgroundColor`, `gray`);
    document.documentElement.style.setProperty(`--textColor`, `white`);

    // bezieht dann immer auf die html seite, die gerade geöffnet ist
  } else {
    document.documentElement.style.setProperty(`--backgroundColor`, `beige`);
    document.documentElement.style.setProperty(`--textColor`, `black`);
  }
}

function toggleButtonStyle() {
  const currentButtonColor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`--button-bg-color`)
    .trim();
  const newButtonColor = currentButtonColor === "white" ? "black" : "white";
  const newTextColor = newButtonColor === "white" ? "black" : "white";

  document.documentElement.style.setProperty(
    `--button-bg-color`,
    newButtonColor
  );
  document.documentElement.style.setProperty(
    `--button-text-color`,
    newTextColor
  );
}
