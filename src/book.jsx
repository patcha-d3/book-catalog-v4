import "./App.css";

function Book({ title, author, image, selected, onSelect }) {
  return (
    <div
      className={`card-book ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <div className="card-book-image">
        {image ? (
          <img 
            src={image} 
            alt={title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150x200?text=No+Image";
            }}
          />
        ) : (
          <div className="img-placeholder">No image</div>
        )}
      </div>

      <div className="card-book-body">
        <h3 className="book-title">{title}</h3>
        {author && <p className="book-author">by {author}</p>}
      </div>
    </div>
  );
}

export default Book;
