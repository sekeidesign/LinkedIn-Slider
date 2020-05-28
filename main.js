// Create a function to trigger an event when the mouse stops moving
(function (mouseStopDelay) {
    var timeout;
    document.addEventListener('mousemove', function (e) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            var event = new CustomEvent("mousestop", {
                detail: {
                    clientX: e.clientX,
                    clientY: e.clientY
                },
                bubbles: true,
                cancelable: true
            });
            e.target.dispatchEvent(event);
        }, mouseStopDelay);
    });
}(1000));

const mouseLeaveUI = () => {
    setTimeout(() => {
        imgUIShow = false;
    }, 1000);
}