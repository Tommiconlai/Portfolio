function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contatti</h3>
                    <p>Email: tuoemail@example.com</p>
                    <p>Tel: +39 123 456 7890</p>
                </div>
                <div className="footer-section">
                    <h3>Social</h3>
                    <p>
                        <a href="https://github.com/tommiconlai" target="_blank" rel="noopener noreferrer">GitHub</a> |
                        <a href="https://linkedin.com/in/gabrieletomasso" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                    </p>
                </div>
                <div className="footer-section">
                    <p>&copy; 2026 Il Tuo Nome. Tutti i diritti riservati.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;