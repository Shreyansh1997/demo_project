import React from "react";
class Gallary extends React.Component {
  //2;
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }
  componentDidMount() {
    //4
    fetch("https://localhost:7005/api/GalleryImages")
      .then((res) => res.json()) // 5 //reponse class ref=>.json
      .then((result) => {
        //6 result will get data from webapi
        this.setState({
          employees: result, //   finally set data in array
        });
      });
  }

  render() {
    // 3
    return (
      <div>
       
        {this.state.employees.map((emp) => (
          
          <img src={emp.imagePath} width={300} height={300}/>
              ))}
      </div>
    );
  }
}
export default Gallary;
