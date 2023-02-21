app a akta protected route ase seta hoitice localhost:5000/dashboard/secret

so kono user akhn jodi oi route a hit kore tahole prothome thake PrivateRoutes a nea jawa hobe.

oikhane check kora hobe authenticated kina. akhn jodi authenticated hoy tahole to take secret route a neye jabe.
```
//axios base url and header a token set korar niom
//⭐⭐ axios config setting
      axios.defaults.baseURL = "http://localhost:8000/api/v1";
      axios.defaults.headers.common["Authorization"] = auth?.token;
```


but akhn jodi authentcated na hoy tahole take Loading page a nea jabe

oikhan a 3 second por take login page a redirect kore dewea hobe..
dewar time a useLocation theke or pathname ta copy kore state akare navigate er moddhe dea pathay dewa hobe.
```
 navigate('/login', { state: location.pathname });
```

so akhn user login page a ache. so login korar por akhn navigate a check kora hobe state a kono path ase kina. jodi thake like akhn ase localhost:5000/dashboard/secret so take secret page a pathay dibe. otherwise take dashboard page a pathay dibe.
```
navigate(location.state || '/dashboard')
```
aitai intended path system in react.