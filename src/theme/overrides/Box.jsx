export default function Box(theme) {
  return {
    MuiBox: {
      variants: [
        {
          props: { variant: "blueCardHeader" },
          style: {
            borderRadius: "30px",
            border: "2px solid #89B4C7",
          },
        },
      ],
    },
  };
}
