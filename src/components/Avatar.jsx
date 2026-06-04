function Avatar({ src, className = "" }) {
  return (
    
       <img
  src={src}
  alt="avatar"
  className={`
    rounded-full
    object-cover
    shadow-xl
    float
    hover:scale-110
    transition-all
    duration-500
    ${className}
  `}
/>
  );
}

export default Avatar;