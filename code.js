figma.showUI(__html__, { width: 360, height: 280 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'converted-oklch') {
    figma.notify("Converted to OKLCH!");
  }
};