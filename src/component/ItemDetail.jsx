import React, { useState, useEffect } from 'react';
import RedeemForm from './Billing';
import { API_BASE } from '../Constant';
import { useHistory } from 'react-router-dom';

// material
import PropTypes from 'prop-types';
import { Tabs, Tab, Collapse, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import ProductList from './ItemDetail/component/ProductList';
import LogoInfo from './LogoInfo';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url("https://www.scandichotels.com/imagevault/publishedmedia/qn6infvg30381stkubky/scandic-sundsvall-city-restaurant-verket-10.jpg")`,
    backgroundColor: '#ECECEC',
  },
  checkoutContainer: {
    width: '100%',
    backgroundColor: '#4EA23A',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',
    padding: '8px 16px',
    marginTop: '10px',
    bottom: 0,
  },
  checkout: {
    border: '1px solid black',
    borderRadius: '10px',
    fontSize: '14px',
    backgroundColor: '#ECECEC !important',
  },
  tabs: {
    backgroundColor: '#ECECEC',
    marginTop: '50px',
    borderRadius: '20px 20px 0px 0px',
    '&.MuiTab-textColorInherit.Mui-selected': {
      color: '#a62a22',
    },
  },
  product: {
    padding: 'none',
  },
  panel: {
    backgroundColor: '#ECECEC !important',
    height: '45rem',
    '&.MuiBox-root-15': {
      padding: '0',
    },
  },
  orderBtn: {
    color: 'white',
    backgroundColor: '#A62A22',
    borderRadius: '10px',
    padding: '8px 16px',
  },
  orderBtnContainer: {
    position: 'fixed',
    justifyContent: 'center',
    bottom: 42,
  },
  total: {
    color: 'white',
  },
  viewTxt: {
    color: '#273238',
  },
}));

const ItemDetails = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [hasError, setErrors] = useState(false);
  const [orderSaved, setOrderSaved] = useState(false);
  const [menuList, setMenuList] = useState({});
  const [itemTotal, setItemTotal] = useState({});
  const [redeem, setRedeem] = useState(false);
  const [open, setOpen] = useState(false);

  const proceedToRedeem = () => {
    setRedeem(!redeem);
  };

  const history = useHistory();
  const query = new URLSearchParams(props.location.search);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function saveOrder() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemTotal),
    };
    fetch(API_BASE + 'company/asset/order/create', requestOptions)
      .then(response => response.json())
      .then(data => setOrderSaved({ postId: data.id }));
  }

  const addItem = (menuIndex, index, price, itemName, id, productCode) => {
    let newData = {
      ...itemTotal,
      [menuIndex + index]: {
        id: id,
        productCode: productCode,
        name: itemName,
        perPlate: price,
        number:
          itemTotal[menuIndex + index] && itemTotal[menuIndex + index].number
            ? itemTotal[menuIndex + index].number + 1
            : 0 + 1,
        total:
          itemTotal[menuIndex + index] && itemTotal[menuIndex + index].number
            ? (itemTotal[menuIndex + index].number + 1) * price
            : (0 + 1) * price,
      },
    };
    setItemTotal(newData);
  };

  const removeItem = (menuIndex, index, price, itemName, id, productCode) => {
    if (itemTotal[menuIndex + index] && itemTotal[menuIndex + index].number > 0) {
      let newData = {
        ...itemTotal,
        [menuIndex + index]: {
          id: id,
          productCode: productCode,
          name: itemName,
          perPlate: price,
          number:
            itemTotal[menuIndex + index] && itemTotal[menuIndex + index].number
              ? itemTotal[menuIndex + index].number - 1
              : 0 - 1,
          total:
            itemTotal[menuIndex + index] && itemTotal[menuIndex + index].number
              ? (itemTotal[menuIndex + index].number - 1) * price
              : (0 - 1) * price,
        },
      };
      if (itemTotal[menuIndex + index].number - 1 == 0) {
        setItemTotal(newData);
      } else {
        setItemTotal(newData);
      }
    }
  };
  async function fetchData() {
    const res = await fetch(
      API_BASE + 'company/af174b04-b495-47c1-bc32-c0dff7170c34/menu?asset=' + query.get('table_no'),
    );
    res
      .json()
      .then(res => setMenuList(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  let totalPrice = 0;
  for (var key in itemTotal) {
    if (itemTotal.hasOwnProperty(key)) {
      totalPrice += itemTotal[key].total;
    }
  }
  return (
    <div>
      {redeem ? (
        <RedeemForm
          itemTotal={itemTotal}
          addItem={addItem}
          removeItem={removeItem}
          proceedToRedeem={proceedToRedeem}
          menuList={menuList}
          tableNumber={query.get('table_no')}
          companyId={props.match.params.id}
        ></RedeemForm>
      ) : (
        <div className={classes.root}>
          <LogoInfo menuList={menuList} tableNumber={query.get('table_no')} />
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="off"
            aria-label="scrollable prevent tabs example"
          >
            {menuList &&
              menuList.data &&
              menuList.data.menu.map((menuData, index) => (
                <Tab label={menuData.category_name} {...a11yProps(index)} key={index} />
              ))}
          </Tabs>
          {menuList &&
            menuList.data &&
            menuList.data.menu.map((menuData, menuIndex) => (
              <TabPanel className={classes.panel} key={menuIndex} value={value} index={menuIndex}>
                {menuData.products.map((product, index) => (
                  <ProductList
                    key={index}
                    className={classes.product}
                    product={product}
                    menuIndex={menuIndex}
                    index={index}
                    itemTotal={itemTotal}
                    addItem={addItem}
                    removeItem={removeItem}
                  />
                ))}
                <Collapse in={totalPrice > 0} className={classes.Collapse}>
                  <div className={classes.checkoutContainer}>
                    <div>
                      <Typography className={classes.total}>Total</Typography>

                      <span>Rs {totalPrice}</span>
                    </div>
                    <Button className={classes.checkout} onClick={() => proceedToRedeem()}>
                      Check out
                    </Button>{' '}
                  </div>
                </Collapse>
              </TabPanel>
            ))}
          <Grid container className={classes.orderBtnContainer}>
            <Button className={classes.orderBtn} onClick={() => proceedToRedeem()}>
              View Order
            </Button>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
