import React from 'react'
import { Card, Button, CardBody, CardText } from "reactstrap";
import "./Skills.css";


const Skills = () => {
  return (
    <div className="box">
      <div className='pro'>
        <div className='card1'>
          <Card
            style={{
              width: '18rem'
            }}
          >
            {/* <img
              alt="Sample"
              src="https://picsum.photos/300/200"
            /> */}
            <CardBody>

              <CardText  style={{
           color:"black"
            }}>
           HTML/CSS
              </CardText>
              <Button>
              overview
              </Button>
            </CardBody>
          </Card>
        </div>

        <div className='card2'>
          <Card
            style={{
              width: '18rem'
            }}
          >
            {/* <img
              alt="Sample"
              src="https://picsum.photos/300/200"
            /> */}
            <CardBody>

              <CardText   style={{
           color:"black"
            }}>
               JAVASCRIPT
              </CardText>
              <Button>
              overview
              </Button>
            </CardBody>
          </Card>
        </div>

        <div className='card3'>
          <Card
            style={{
              width: '18rem'
            }}
          >
            {/* <img
              alt="Sample"
              src="https://picsum.photos/300/200"
            /> */}
            <CardBody>

              <CardText  style={{
           color:"black"
            }}>
             REACT JS
              </CardText>
              <Button>
              overview
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className='pro1'>
        <div className='card4'>
          <Card
            style={{
              width: '18rem'
            }}
          >
            {/* <img
              alt="Sample"
              src="https://picsum.photos/300/200"
            /> */}
            <CardBody>

              <CardText  style={{
           color:"black"
            }}>
               NEXT JS
              </CardText>
              <Button>
              overview
              </Button>
            </CardBody>
          </Card>
        </div>

        <div className='card5'>
          <Card
            style={{
              width: '18rem'
            }}
          >
            {/* <img
              alt="Sample"
              src="https://picsum.photos/300/200"
            /> */}
            <CardBody>

              <CardText  style={{
           color:"black"
            }}>
                NODE JS
              </CardText>
              <Button>
                overview
              </Button>
            </CardBody>
          </Card>
        </div>

        <div className='card6'>
          <Card
            style={{
              width: '18rem'
            }}
          >
            {/* <img
              alt="Sample"
              src="https://picsum.photos/300/200"
            /> */}
            <CardBody>

              <CardText  style={{
           color:"black"
            }}>
                MONGODB
              </CardText>
              <Button>
              overview
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>


    </div>
  )
}

export default Skills