function CopyFunction() {
    var CopyEmail = document.getElementById("EmailInput");
    CopyEmail.select();
    document.execCommand("copy");
    alert("Email Copied to Clipboard");
}
