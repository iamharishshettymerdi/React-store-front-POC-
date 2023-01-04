import { makeStyles } from "@material-ui/core/styles"


const Button = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    textcolor,
    padding,
    minheight,
    minwidth,
    margin,
  }) => {
  return (
    <button 
      onClick={onClick}
      style={{
        color:textcolor,
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
         borderColor:textcolor,
         padding,
         minHeight:minheight,
         minWidth:minwidth,
         margin:margin,
      }}
    >
    {children}
    </button>
  );
}
export default Button