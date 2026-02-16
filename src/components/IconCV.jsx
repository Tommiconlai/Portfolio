function IconCV({ Icon, label, color }) {
    return (
        <div className="icon-item">
            <Icon size={40} color={color} />
            <p>{label}</p>
        </div>
    );
}

export default IconCV;