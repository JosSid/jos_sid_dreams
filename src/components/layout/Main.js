import FormMessage from "../common/formMessage/FormMessage";
import LinksList from "../LinksList";
const Main = () => {
    return (
        <div className="row">
            <div className=" col-sm-12 col-md-6 col-lg-4 d-flex align-items-center">
                Hola
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 bg-light d-flex justify-content-center">
                <LinksList />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                <FormMessage /> 
            </div>
        </div>
    )
};

export default Main;