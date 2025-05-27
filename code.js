figma.showUI(__html__, { width: 320, height: 400 });

figma.ui.onmessage = msg => {
  if (msg.type === 'convert-color') {
    // 메시지 처리 로직 (예: 색상 선택 후 반영 등)
  }
};