export const PyrodactylCredentialsEmail = (email: string, password: string) => {
    return `
<html>
<body>
    <p>Thank you for choosing Pyro!</p>
    <p>Your account has been created. Here are your login details:</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p>You can login at <a href="https://panel.pyro.host">https://panel.pyro.host</a>.</p>
</body>
</html>`;
};
