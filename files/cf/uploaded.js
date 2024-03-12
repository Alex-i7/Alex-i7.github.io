window.addEventListener(
    "message",
    (event) => {
        if (event.data.type === "sandbox") {
            var iframe = document.getElementsByTagName('iframe')[0];
            iframe.sandbox = event.data.data;
            iframe.src = event.data.url;
        }
    },
    false,
);
