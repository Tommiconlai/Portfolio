function IconCV({ Icon, label, color }) {
    return (
        <div className="icon-cv">
            <Icon className="icon-cv-icon" size={40} color={color} />
            <p>{label}</p>
        </div>
    );
}

export default IconCV;