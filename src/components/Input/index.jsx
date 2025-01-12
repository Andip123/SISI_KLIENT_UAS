import Label from "./Label";
import Inputt from "./Inputt";

const InputForm = (props) => {
    const { type, name, label, placeholder} = props;
    return (
        <div className="mb-4">
            <Label htmlFor={name}>{label}</Label>
            <Inputt name={name} type={type} placholder={placeholder}/>
        </div>
    );
};
export default InputForm;