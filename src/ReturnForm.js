import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";


const initialFieldValues = {
  BillNo: "",
  Product: [{ ID: "", Quantity: "", Rate: "" }],
  Quantity: "",
  PurchaseAmt: "",
  ReturnPercentage: "",
  Gst: "",
  stockof: "",
};

// const product={ProductId:""}

const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1),
  },
});

class ReturnForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialFieldValues;
  }

  handleInputChange1 = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.Product];
    list[index][name] = value;
    this.setState({ Product: list });
  };

  // handle click event of the Remove button
  handleRemoveClick = (index) => {
    console.log(index);
    const list = [...this.state.Product];
    list.splice(index, 1);
    this.setState({ Product: list });
  };

  // handle click event of the Add button
  handleAddClick = () => {
    this.setState({
      Product: [...this.state.Product, { ID: "", Quantity: "", Rate: "" }],
    });
  };

  reset = () => {
    this.setState(initialFieldValues);
  };

  handleInputChange = (e) => {
    var { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  addorEdit = (obj) => {
    for (var i = 0; i < this.state.Product.length; i++) {
      console.log(this.state.Product[i].ID);
      console.log(this.state.Product[i].Quantity);
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.addorEdit(this.state);
    this.setState({
      initialFieldValues,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <main className={classes.content}>
            <Toolbar />
            <React.Fragment>
              <Container
                maxWidth="sm"
                style={{ backgroundColor: "#F8F8FF", height: "100vh" }}
              >
                <Typography variant="h6" gutterBottom>
                  <h2>Return Item</h2>
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="BillNo"
                      label="Purchase-InvoiceNo"
                      fullWidth
                      value={this.state.BillNo}
                      autoComplete="off"
                      onChange={this.handleInputChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="ReturnPercentage"
                      label="Return Percentage"
                      fullWidth
                      value={this.state.ReturnPercentage}
                      autoComplete="off"
                      onChange={this.handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      name="Gst"
                      label="GST Tax"
                      fullWidth
                      value={this.state.Gst}
                      autoComplete="off"
                      onChange={this.handleInputChange}
                    />
                  </Grid>
                  {this.state.Product.map((x, i) => {
                    return (
                      <>
                        {/* <p></p>
                    <p>{i}</p> */}
                        <Grid item xs={3}>
                          <TextField
                            required
                            name="ID"
                            label="Product Id"
                            fullWidth
                            value={this.state.Product.ID}
                            autoComplete="off"
                            onChange={(e) => this.handleInputChange1(e, i)}
                          />
                        </Grid>

                        <Grid item xs={3}>
                          <TextField
                            required
                            name="Quantity"
                            label="Quantity"
                            fullWidth
                            value={this.state.Product.Quantity}
                            autoComplete="off"
                            onChange={(e) => this.handleInputChange1(e, i)}
                          />
                        </Grid>
                        <Grid item sm={2}>
                          <TextField
                            required
                            name="Rate"
                            label=" Rate"
                            fullWidth
                            value={this.state.Product.Rate}
                            autoComplete="off"
                            onChange={(e) => this.handleInputChange1(e, i)}
                          />
                        </Grid>

                        <Grid>
                          {this.state.Product.length !== 1 && (
                            <button
                              className="mr10"
                              onClick={() => this.handleRemoveClick(i)}
                            >
                              Remove
                            </button>
                          )}
                          {this.state.Product.length - 1 === i && (
                            <button onClick={this.handleAddClick}>Add</button>
                          )}
                        </Grid>
                      </>
                    );
                  })}
                  <div style={{ marginTop: 20 }}>{JSON.stringify(this.state.Product)}</div>

                  

                  <Grid>
                    
                      <Button
                        variant="contained"
                        color="Primary"
                        onClick={this.handleFormSubmit}
                        className={classes.button}
                      >
                        Bill
                      </Button>
                    
                  </Grid>
                </Grid>
              </Container>
            </React.Fragment>
          </main>
        </div>
      </>
    );
  }
}
export default withStyles(useStyles)(ReturnForm);
