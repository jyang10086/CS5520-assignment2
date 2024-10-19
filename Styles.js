export const primaryBgColor = "lavender";
export const darkBgColor = "#882794";
export const navHeaderBgColor = "darkslateblue";
export const naviHeaderFontColor = "white";
export const darkFontColor = "white";
export const primaryFontColor = "darkslateblue";

export const inputContainer = {
  padding: 10,
  borderWidth: 2,
  borderColor: primaryFontColor,
  borderRadius: 5,
  backgroundColor: "white",
  color: primaryFontColor,
  fontSize: 18,
};

export const addContainer = {
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 20,
    padding: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    margin: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topView: {
    flex: 8,
    rowGap: 20,
  },
  bottomView: {
    flex: 2,
    justifyContent: "space-between",
  },
};

export const item = {
  itemContainer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: primaryFontColor,
    borderRadius: 10,
    marginBottom: 18,
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: 5,
  },
  typeText: {
    flex: 1,
    color: darkFontColor,
    fontWeight: "bold",
    fontSize: 15,
  },
  detailText: {
    flex: 1,
    color: primaryFontColor,
    fontWeight: "bold",
    backgroundColor: darkFontColor,
    fontSize: 15,
    padding: 5,
    textAlign: "center",
  },
};

export const screenContainer = {
  bgColor: primaryBgColor,
};

export const itemsContainer = {
  height: "100%",
  padding: 20,
};

export const settingContainer = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

export const selectListContainer = {
  box: {
    backgroundColor: darkFontColor,
    borderWidth: 2,
    borderColor: primaryFontColor,
    borderRadius: 5,
  },
  input: {
    color: primaryFontColor,
    fontSize: 18,
  },
  dropdown: {
    backgroundColor: darkFontColor,
    borderWidth: 2,
    borderColor: primaryFontColor,
  },
  dropdownText: {
    color: primaryFontColor,
    fontSize: 18,
  },
};

export const pressableButtonStyles = {
  defaultStyle: {
    backgroundColor: "transparent",
  },
  pressed: { opacity: 0.5 },
  disabled: { opacity: 0.5 },
};

export const AddButtonStyle = {
  defaultStyle: {
    flexDirection: "row",
    margin: 10,
  },
};

export const checkboxStyle = {
  checkboxStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
};
