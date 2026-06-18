export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; <span id="current-year">{currentYear}</span> Muhammad.
          Dibuat dengan <span className="heart">&hearts;</span> dan React + Vite
        </p>
      </div>
    </footer>
  );
}
