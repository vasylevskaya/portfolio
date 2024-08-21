const Link = ({
  href,
  title,
  text,
  linkClass,
  iconClass,

}) => {
  return (
    <div className="link-container">
      {!!iconClass && (
        <div className={iconClass} />
      )}
      <a
        className={linkClass}
        href={href}
        title={title}
      >
        {text}
      </a>
    </div>
  )
}

export default Link