async function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const req = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
    });

    const res = await req.json();

    if (req.status !== 200) {
        alert(res.error);
        return;
    }

    localStorage.setItem("usuario", JSON.stringify(res));
    window.location.href = "../home/index.html";
}
