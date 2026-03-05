import React from "react";
import { Typography, Button, Box, Container } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";

export default function Home() {
    return (
        <main>
            <section
                id="hero"
                className="flex flex-col items-center justify-center gap-8 py-16"
            >
                <Typography variant="h3" component="h1" fontWeight={700} textAlign="center">
                    Welcome to Our Store
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    textAlign="center"
                    maxWidth={600}
                >
                    Discover our collection of high-quality products. Browse, shop, and
                    enjoy free shipping on orders over US$100.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: 2,
                        mt: 4,
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        href="/products"
                        startIcon={<StorefrontIcon />}
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: "1rem",
                            textTransform: "none",
                            backgroundColor: "rgb(28, 28, 28)",
                            "&:hover": { backgroundColor: "rgb(50, 50, 50)" },
                        }}
                    >
                        Browse Products
                    </Button>

                    <Button
                        variant="outlined"
                        size="large"
                        href="/register"
                        startIcon={<PersonAddIcon />}
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: "1rem",
                            textTransform: "none",
                            borderColor: "rgb(28, 28, 28)",
                            color: "rgb(28, 28, 28)",
                            "&:hover": {
                                borderColor: "rgb(50, 50, 50)",
                                backgroundColor: "rgba(28, 28, 28, 0.04)",
                            },
                        }}
                    >
                        Register
                    </Button>

                    <Button
                        variant="outlined"
                        size="large"
                        href="/login"
                        startIcon={<LoginIcon />}
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: "1rem",
                            textTransform: "none",
                            borderColor: "rgb(28, 28, 28)",
                            color: "rgb(28, 28, 28)",
                            "&:hover": {
                                borderColor: "rgb(50, 50, 50)",
                                backgroundColor: "rgba(28, 28, 28, 0.04)",
                            },
                        }}
                    >
                        Login
                    </Button>
                </Box>
            </section>
        </main>
    );
}
