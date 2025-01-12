const Label = (props) => {
    const {htmlFor, children} = props
    return (
        <label htmlFor={htmlFor} className="text-white text-[14px] font-semibold">
            {children}
        </label>
    )
}

export default Label