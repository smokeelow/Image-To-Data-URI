var
    canvas = document.createElement('canvas'),
    context,
    tempContainer = document.createElement('textarea');


/**
 * Handle click
 *
 * @param info
 * @param tab
 */
function clickHandler(info, tab) {
    var tmpImage = new Image;

    tmpImage.src = info.srcUrl;

    tmpImage.onload = function() {
        canvas.width = tmpImage.width;
        canvas.height = tmpImage.height;

        context = canvas.getContext('2d');
        context.drawImage(tmpImage, 0, 0);

        tempContainer.textContent = canvas.toDataURL();
        document.body.appendChild(tempContainer);
        tempContainer.select();
        document.execCommand('copy');
        document.body.removeChild(tempContainer);
    }
}

/**
 * Add item to context menu
 */
chrome.contextMenus.create({
    'title': 'Copy Image Data URI',
    'type': 'normal',
    'contexts': ['image'],
    'onclick': clickHandler
});
