interface Props {
  title: string;
}

const RadioButton: React.FC<Props> = ({ title }) => {
  
  return (
    <div className="">
      <input type="radio" id={title} name={title} value={title} />
      <label className="ml-2" htmlFor={title}>{title}</label>
    </div>
  )
}

interface Props {

}

export default RadioButton
