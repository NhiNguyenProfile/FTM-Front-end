export default function Card(theme) {
  return {
    MuiCard: {
      variants: [
        {
          props: { variant: "blue" },
          style: {
            background: theme.palette.paper.blue,
            padding: "10px",
            borderRadius: "30px",
          },
        },
      ],
    },
  };
}
