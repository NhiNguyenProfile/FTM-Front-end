import ReplayIcon from "@mui/icons-material/Replay";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {
    navigate("/dashboard/homepage", { replace: true });
  };
  return (
    <>
      <Stack
        marginBottom={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Logo />
      </Stack>
      <Stack
        marginBottom={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="label" style={{ display: "inline-block" }}>
          Đăng nhập để tiếp tục
        </Typography>
      </Stack>
      <Input
        type="text"
        label="Tên đăng nhập"
        placeholder="Tên đăng nhập"
        style={{ marginBottom: "2em", padding: "1em 0" }}
      />
      <Input
        label="Mật khẩu"
        placeholder="Mật khẩu"
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Stack
        marginTop={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Link>
          <Typography variant="forget">Quên mật khẩu?</Typography>
        </Link>
      </Stack>
      <Grid container marginTop={3}>
        <Grid item xs={0.75} sm={0.75}>
          <input
            type="checkbox"
            style={{
              borderRadius: "0px",
            }}
          />
        </Grid>
        <Grid item xs={11.25} sm={11.25}>
          <Typography variant="label" style={{ display: "inline-block" }}>
            Nhớ mật khẩu
          </Typography>
        </Grid>
      </Grid>

      <Stack marginTop={3}>
        <Button variant="login" onClick={handleLogin}>
          <Typography variant="loginButton">Tiếp tục</Typography>
        </Button>
      </Stack>
    </>
  );
}

export default LoginForm;
