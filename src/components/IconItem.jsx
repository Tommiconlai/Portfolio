function IconItem({ src, alt, label }) {
    return (
        <div className="icon-item">
            <img src={src} alt={alt} />
            <p>{label}</p>
        </div>
    );
}

export default IconItem;
