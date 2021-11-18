(this["webpackJsonpaccessible-housing-app-client"] =
  this["webpackJsonpaccessible-housing-app-client"] || []).push([
  [0],
  {
    281: function(e, t, n) {},
    427: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = {};
      n.r(a),
        n.d(a, "LOGOUT", function() {
          return O;
        }),
        n.d(a, "SET_LOGGEDIN", function() {
          return S;
        }),
        n.d(a, "SET_SPINNER", function() {
          return v;
        }),
        n.d(a, "SET_REDIRECT_URL", function() {
          return w;
        }),
        n.d(a, "logout", function() {
          return _;
        }),
        n.d(a, "setLoggedIn", function() {
          return k;
        }),
        n.d(a, "setSpinner", function() {
          return L;
        }),
        n.d(a, "setRedirectUrl", function() {
          return C;
        });
      var o = {};
      n.r(o),
        n.d(o, "VALIDATE_TOKEN_REQUEST", function() {
          return N;
        }),
        n.d(o, "VALIDATE_TOKEN_SUCCESS", function() {
          return I;
        }),
        n.d(o, "VALIDATE_TOKEN_FAILURE", function() {
          return R;
        }),
        n.d(o, "GET_PROFILE_REQUEST", function() {
          return A;
        }),
        n.d(o, "GET_PROFILE_SUCCESS", function() {
          return D;
        }),
        n.d(o, "GET_PROFILE_FAILURE", function() {
          return U;
        }),
        n.d(o, "UPDATE_PROFILE_REQUEST", function() {
          return P;
        }),
        n.d(o, "UPDATE_PROFILE_SUCCESS", function() {
          return G;
        }),
        n.d(o, "UPDATE_PROFILE_FAILURE", function() {
          return F;
        }),
        n.d(o, "validateToken", function() {
          return B;
        }),
        n.d(o, "getProfile", function() {
          return W;
        }),
        n.d(o, "updateProfile", function() {
          return z;
        });
      var r = {};
      n.r(r),
        n.d(r, "HANDLE_INPUT", function() {
          return $;
        }),
        n.d(r, "HANDLE_SEARCH", function() {
          return M;
        }),
        n.d(r, "HANDLE_DELETE_OPEN", function() {
          return H;
        }),
        n.d(r, "HANDLE_DELETE_CLOSE", function() {
          return Z;
        }),
        n.d(r, "CLEAR_FORM", function() {
          return V;
        }),
        n.d(r, "CLEAR_SEARCH", function() {
          return q;
        }),
        n.d(r, "CLEAR_FEATURES", function() {
          return Q;
        }),
        n.d(r, "UPDATE_FILTER", function() {
          return Y;
        }),
        n.d(r, "GET_LISTING_BY_ID_REQUEST", function() {
          return J;
        }),
        n.d(r, "GET_LISTING_BY_ID_SUCCESS", function() {
          return K;
        }),
        n.d(r, "GET_LISTING_BY_ID_FAILURE", function() {
          return X;
        }),
        n.d(r, "ADD_LISTING_REQUEST", function() {
          return ee;
        }),
        n.d(r, "ADD_LISTING_SUCCESS", function() {
          return te;
        }),
        n.d(r, "ADD_LISTING_FAILURE", function() {
          return ne;
        }),
        n.d(r, "GET_ALL_LISTINGS_REQUEST", function() {
          return ae;
        }),
        n.d(r, "GET_ALL_LISTINGS_SUCCESS", function() {
          return oe;
        }),
        n.d(r, "GET_ALL_LISTINGS_FAILURE", function() {
          return re;
        }),
        n.d(r, "GET_USER_LISTINGS_REQUEST", function() {
          return ie;
        }),
        n.d(r, "GET_USER_LISTINGS_SUCCESS", function() {
          return se;
        }),
        n.d(r, "GET_USER_LISTINGS_FAILURE", function() {
          return ce;
        }),
        n.d(r, "DELETE_LISTING_REQUEST", function() {
          return le;
        }),
        n.d(r, "DELETE_LISTING_SUCCESS", function() {
          return pe;
        }),
        n.d(r, "DELETE_LISTING_FAILURE", function() {
          return de;
        }),
        n.d(r, "UPDATE_LISTING_REQUEST", function() {
          return ue;
        }),
        n.d(r, "UPDATE_LISTING_SUCCESS", function() {
          return me;
        }),
        n.d(r, "UPDATE_LISTING_FAILURE", function() {
          return he;
        }),
        n.d(r, "handleInput", function() {
          return ge;
        }),
        n.d(r, "handleSearch", function() {
          return be;
        }),
        n.d(r, "handleDeleteOpen", function() {
          return fe;
        }),
        n.d(r, "handleDeleteClose", function() {
          return ye;
        }),
        n.d(r, "clearForm", function() {
          return je;
        }),
        n.d(r, "clearSearch", function() {
          return xe;
        }),
        n.d(r, "clearFeatures", function() {
          return Oe;
        }),
        n.d(r, "updateFilter", function() {
          return Se;
        }),
        n.d(r, "getListingById", function() {
          return ve;
        }),
        n.d(r, "getUserListings", function() {
          return we;
        }),
        n.d(r, "getAllListings", function() {
          return _e;
        }),
        n.d(r, "addListing", function() {
          return ke;
        }),
        n.d(r, "updateListing", function() {
          return Le;
        }),
        n.d(r, "deleteListing", function() {
          return Ce;
        });
      var i = n(0),
        s = n.n(i),
        c = n(17),
        l = n(59),
        p = n(22),
        d = (n(281), n(8)),
        u = n(26),
        m = n(27),
        h = n(29),
        g = n(28),
        b = n(7),
        f = n(32),
        y = n(14),
        j = n(510),
        x = n(6),
        O = "LOGOUT",
        S = "SET_LOGGEDIN",
        v = "SET_SPINNER",
        w = "SET_REDIRECT_URL";
      function _() {
        return { type: O };
      }
      function k(e, t) {
        return { type: S, payload: { userId: e, token: t } };
      }
      function L() {
        return { type: v };
      }
      function C(e) {
        return { type: w, payload: e };
      }
      var E = n(44),
        T = "",
        N = "VALIDATE_TOKEN_REQUEST",
        I = "VALIDATE_TOKEN_SUCCESS",
        R = "VALIDATE_TOKEN_FAILURE",
        A = "GET_PROFILE_REQUEST",
        D = "GET_PROFILE_SUCCESS",
        U = "GET_PROFILE_FAILURE",
        P = "UPDATE_PROFILE_REQUEST",
        G = "UPDATE_PROFILE_SUCCESS",
        F = "UPDATE_PROFILE_FAILURE";
      function B(e, t) {
        return Object(b.a)({}, E.RSAA, {
          endpoint: "".concat("", "/api/user/").concat(t),
          method: "GET",
          types: [
            N,
            { type: I, payload: { token: e } },
            {
              type: R,
              payload: function(e, t, n) {
                return n.json().then(function(e) {
                  var t = "Sorry, something went wrong :(";
                  return e && e.message && (t = e.message), { message: t };
                });
              }
            }
          ],
          headers: { Authorization: "Bearer ".concat(e) }
        });
      }
      function W(e, t) {
        return Object(b.a)({}, E.RSAA, {
          endpoint: "".concat("", "/api/user/").concat(t),
          method: "GET",
          types: [
            A,
            D,
            {
              type: U,
              payload: function(e, t, n) {
                return n.json().then(function(e) {
                  var t = "Sorry, something went wrong :(";
                  return e && e.message && (t = e.message), { message: t };
                });
              }
            }
          ],
          headers: { Authorization: "Bearer ".concat(e) }
        });
      }
      function z(e, t, n) {
        return (
          console.log(n),
          Object(b.a)({}, E.RSAA, {
            endpoint: "".concat("", "/api/user/").concat(t),
            method: "PUT",
            types: [
              P,
              G,
              {
                type: F,
                payload: function(e, t, n) {
                  return n.json().then(function(e) {
                    var t = "Sorry, something went wrong :(";
                    return e && e.message && (t = e.message), { message: t };
                  });
                }
              }
            ],
            headers: {
              Authorization: "Bearer ".concat(e),
              "Content-Type": "application/json"
            },
            body: JSON.stringify(n)
          })
        );
      }
      var $ = "HANDLE_INPUT",
        M = "HANDLE_SEARCH",
        H = "HANDLE_DELETE_OPEN",
        Z = "HANDLE_DELETE_CLOSE",
        V = "CLEAR_FORM",
        q = "CLEAR_SEARCH",
        Q = "CLEAR_FEATURES",
        Y = "UPDATE_FILTER",
        J = "GET_LISTING_BY_ID_REQUEST",
        K = "GET_LISTING_BY_ID_SUCCESS",
        X = "GET_LISTING_BY_ID_FAILURE",
        ee = "ADD_LISTING_REQUEST",
        te = "ADD_LISTING_SUCCESS",
        ne = "ADD_LISTING_FAILURE",
        ae = "GET_ALL_LISTINGS_REQUEST",
        oe = "GET_ALL_LISTINGS_SUCCESS",
        re = "GET_ALL_LISTINGS_FAILURE",
        ie = "GET_USER_LISTINGS_REQUEST",
        se = "GET_USER_LISTINGS_SUCCESS",
        ce = "GET_USER_LISTINGS_FAILURE",
        le = "DELETE_LISTING_REQUEST",
        pe = "DELETE_LISTING_SUCCESS",
        de = "DELETE_LISTING_FAILURE",
        ue = "UPDATE_LISTING_REQUEST",
        me = "UPDATE_LISTING_SUCCESS",
        he = "UPDATE_LISTING_FAILURE";
      function ge(e) {
        var t = e.target,
          n = t.name,
          a = t.value;
        return { type: $, payload: { name: n, value: a } };
      }
      function be(e) {
        var t = e.target,
          n = t.name,
          a = t.value;
        return { type: M, payload: { name: n, value: a } };
      }
      function fe(e) {
        return { type: H, payload: { selectedListing: e } };
      }
      function ye() {
        return { type: Z };
      }
      function je() {
        return { type: V };
      }
      function xe() {
        return { type: q };
      }
      function Oe() {
        return { type: Q };
      }
      function Se(e) {
        return { type: Y, payload: e };
      }
      function ve(e) {
        return Object(b.a)({}, E.RSAA, {
          endpoint: "".concat(T, "/api/listing/").concat(e),
          method: "GET",
          types: [
            J,
            K,
            {
              type: X,
              payload: function(e, t, n) {
                return n.json().then(function(e) {
                  var t = "Sorry, something went wrong :(";
                  return e && e.message && (t = e.message), { message: t };
                });
              }
            }
          ]
        });
      }
      function we(e, t) {
        return Object(b.a)({}, E.RSAA, {
          endpoint: "".concat(T, "/api/listing/user/").concat(t),
          method: "GET",
          types: [
            ie,
            se,
            {
              type: ce,
              payload: function(e, t, n) {
                return n.json().then(function(e) {
                  var t = "Sorry, something went wrong :(";
                  return e && e.message && (t = e.message), { message: t };
                });
              }
            }
          ],
          headers: {
            Authorization: "Bearer ".concat(e),
            "Content-Type": "application/json"
          }
        });
      }
      function _e() {
        return Object(b.a)({}, E.RSAA, {
          endpoint: "".concat(T, "/api/listing"),
          method: "GET",
          types: [
            ae,
            oe,
            {
              type: re,
              payload: function(e, t, n) {
                return n.json().then(function(e) {
                  var t = "Sorry, something went wrong :(";
                  return e && e.message && (t = e.message), { message: t };
                });
              }
            }
          ]
        });
      }
      function ke(e, t) {
        return (
          console.log(t),
          console.log(JSON.stringify(t)),
          Object(b.a)({}, E.RSAA, {
            endpoint: "".concat(T, "/api/listing/"),
            method: "POST",
            types: [
              ee,
              te,
              {
                type: ne,
                payload: function(e, t, n) {
                  return n.json().then(function(e) {
                    var t = "Sorry, something went wrong :(";
                    return e && e.message && (t = e.message), { message: t };
                  });
                }
              }
            ],
            body: JSON.stringify(t),
            headers: {
              Authorization: "Bearer ".concat(e),
              "Content-Type": "application/json"
            }
          })
        );
      }
      function Le(e, t, n) {
        return (
          console.log("updateListing"),
          console.log(n),
          console.log(JSON.stringify(n)),
          Object(b.a)({}, E.RSAA, {
            endpoint: "".concat(T, "/api/listing/").concat(t),
            method: "PUT",
            types: [
              ue,
              me,
              {
                type: he,
                payload: function(e, t, n) {
                  return n.json().then(function(e) {
                    var t = "Sorry, something went wrong :(";
                    return e && e.message && (t = e.message), { message: t };
                  });
                }
              }
            ],
            body: JSON.stringify(n),
            headers: {
              Authorization: "Bearer ".concat(e),
              "Content-Type": "application/json"
            }
          })
        );
      }
      function Ce(e, t) {
        return Object(b.a)({}, E.RSAA, {
          endpoint: "".concat(T, "/api/listing/").concat(t),
          method: "DELETE",
          types: [
            le,
            pe,
            {
              type: de,
              payload: function(e, t, n) {
                return n.json().then(function(e) {
                  var t = "Sorry, something went wrong :(";
                  return e && e.message && (t = e.message), { message: t };
                });
              }
            }
          ],
          headers: { Authorization: "Bearer ".concat(e) }
        });
      }
      var Ee,
        Te = n(40),
        Ne = n(515),
        Ie = n(490),
        Re = n(491),
        Ae = n(72),
        De = n(488),
        Ue = n(429),
        Pe = n(202),
        Ge = n.n(Pe),
        Fe = n(236),
        Be = n(514),
        We = n(489),
        ze = n(430),
        $e = n(516),
        Me = n(204),
        He = n.n(Me),
        Ze = function(e) {
          if (e) {
            var t = Object.keys(e).find(function(e) {
                return !!document.getElementById(e);
              }),
              n = document.getElementById(t);
            if (n) {
              var a =
                n.getBoundingClientRect().top +
                document.documentElement.scrollTop;
              window.scrollTo({ top: a - 200, behavior: "smooth" });
            } else console.log("can't find element for ".concat(t));
          }
        },
        Ve = function(e, t, n, a, o, r, i, s, c, l, p, d) {
          var u = [e, t, n, a, o, r, i, s, c, l, p, d].map(function(e) {
            return null == e
              ? null
              : e < 1
              ? "Subsidized"
              : "$".concat(parseInt(e));
          });
          return [
            u[0] && u[1]
              ? "Studio: ".concat(u[0], "\u2013").concat(u[1])
              : u[0]
              ? "Studio: ".concat(u[0])
              : null,
            u[2] && u[3]
              ? "1BR: ".concat(u[2], "\u2013").concat(u[3])
              : u[2]
              ? "1BR: ".concat(u[2])
              : null,
            u[4] && u[5]
              ? "2BR: ".concat(u[4], "\u2013").concat(u[5])
              : u[4]
              ? "2BR: ".concat(u[4])
              : null,
            u[5] && u[6]
              ? "3BR: ".concat(u[5], "\u2013").concat(u[6])
              : u[5]
              ? "3BR: ".concat(u[5])
              : null,
            u[7] && u[8]
              ? "4BR: ".concat(u[7], "\u2013").concat(u[8])
              : u[7]
              ? "4BR: ".concat(u[7])
              : null,
            u[9] && u[10]
              ? "5BR: ".concat(u[9], "\u2013").concat(u[10])
              : u[9]
              ? "5BR: ".concat(u[9])
              : null
          ]
            .filter(function(e) {
              return e;
            })
            .join("\r\n");
        },
        qe = n.p + "static/media/CV-logo-hdr-horiz.7cd78e55.png",
        Qe = n(2),
        Ye = (function(e) {
          Object(h.a)(n, e);
          var t = Object(g.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e)).state = { anchorEl: null }),
              (a.handleClick = a.handleClick.bind(Object(Te.a)(a))),
              (a.handleClose = a.handleClose.bind(Object(Te.a)(a))),
              a
            );
          }
          return (
            Object(m.a)(n, [
              {
                key: "handleClick",
                value: function(e) {
                  this.setState({ anchorEl: e.currentTarget }),
                    this.props.main_ref.current.classList.add("is-blurred");
                }
              },
              {
                key: "handleClose",
                value: function() {
                  this.setState({ anchorEl: null }),
                    this.props.main_ref.current.classList.remove("is-blurred");
                }
              },
              {
                key: "skipToMain",
                value: function() {
                  return (function(e) {
                    var t = document.getElementById(e);
                    (t.tabIndex = -1),
                      t.focus(),
                      t.addEventListener("blur", function(e) {
                        e.target.removeAttribute("tabindex");
                      });
                  })("main");
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.classes,
                    n = this.state.anchorEl,
                    a = this.props.appState.loggedIn,
                    o = {
                      new: "Add a Listing",
                      listings: "Browse Listings",
                      map: "Search Listings",
                      logout: "Logout"
                    },
                    r = a ? ["new", "map", "logout"] : ["new", "map"],
                    i = function(n) {
                      var a = n.primary,
                        o = n.handleClose,
                        r = n.link;
                      return Object(Qe.jsx)(Be.a, {
                        button: !0,
                        component: De.a,
                        href: "/".concat(r),
                        onClick: function() {
                          e.props.history.push("/".concat(r)), o();
                        },
                        className: t.menuItem,
                        "data-test": "menu-item-mobile",
                        children: Object(Qe.jsx)(We.a, {
                          primary: a,
                          primaryTypographyProps: { color: "secondary" }
                        })
                      });
                    },
                    c = Object(Qe.jsx)("div", {
                      "data-test": "mobile-links",
                      children: r.map(function(t, n) {
                        return Object(Qe.jsx)(
                          i,
                          {
                            primary: o[t],
                            handleClose: e.handleClose,
                            link: t,
                            "data-test": "mobile-link"
                          },
                          n
                        );
                      })
                    }),
                    p = !Object(Ne.b)("sm", this.props.width);
                  return (
                    console.log("mobile: ".concat(p)),
                    Object(Qe.jsx)("div", {
                      className: t.root,
                      "data-test": "component-navbar",
                      children: Object(Qe.jsx)(Ie.a, {
                        position: "fixed",
                        className: t.appBar,
                        children: Object(Qe.jsxs)(Re.a, {
                          className: t.toolbar,
                          children: [
                            Object(Qe.jsx)(De.a, {
                              color: "primary",
                              variant: "contained",
                              className: t.skip,
                              onClick: this.skipToMain,
                              "data-test": "skiplink-button",
                              children: "Skip to content \u203a"
                            }),
                            Object(Qe.jsxs)(s.a.Fragment, {
                              children: [
                                Object(Qe.jsxs)(Ue.a, {
                                  className: t.menuButton,
                                  color: "secondary",
                                  "aria-label": "Menu",
                                  "aria-owns": n ? "nav-menu" : null,
                                  "aria-haspopup": "true",
                                  onClick: function(t) {
                                    return e.handleClick(t);
                                  },
                                  "data-test": "menu-button",
                                  children: [
                                    Object(Qe.jsx)(Ge.a, {}),
                                    Object(Qe.jsx)(Ae.a, {
                                      className: t.menuLabel,
                                      children: "Menu"
                                    })
                                  ]
                                }),
                                Object(Qe.jsx)(Fe.a, {
                                  id: "nav-menu",
                                  anchorEl: n,
                                  open: Boolean(n),
                                  onClose: this.handleClose,
                                  component: "nav",
                                  className: "drawer",
                                  elevation: 0,
                                  anchorOrigin: {
                                    horizontal: "left",
                                    vertical: "top"
                                  },
                                  transformOrigin: {
                                    horizontal: "left",
                                    vertical: "top"
                                  },
                                  TransitionComponent: ze.a,
                                  TransitionProps: { direction: "right" },
                                  PaperProps: { className: t.drawer },
                                  "data-test": "menu",
                                  children: c
                                })
                              ]
                            }),
                            Object(Qe.jsx)(l.b, {
                              to: "/",
                              className: t.logoLink,
                              "data-test": "logo-link",
                              children: Object(Qe.jsx)("img", {
                                src: qe,
                                alt: "Community Vision",
                                className: t.logo,
                                "data-test": "logo-image"
                              })
                            }),
                            Object(Qe.jsx)(Ae.a, {
                              variant: "h6",
                              color: "inherit",
                              className: t.title,
                              "data-test": "title",
                              children: Object(Qe.jsx)(l.b, {
                                to: "/",
                                className: t.title,
                                children: "Accessible Housing Hotsheet"
                              })
                            }),
                            a
                              ? Object(Qe.jsx)("div", {
                                  className: t.admin,
                                  children: Object(Qe.jsx)($e.a, {
                                    alt: this.props.profile.profile.name,
                                    src: this.props.profile.profile.avatarUrl,
                                    className: t.avatar
                                  })
                                })
                              : Object(Qe.jsx)("a", {
                                  className: t.loginLinkNavBar,
                                  href: "".concat(
                                    "http://localhost:3001",
                                    "/api/auth/google"
                                  ),
                                  children: p ? "Log in" : "Log in / Sign up"
                                }),
                            Object(Qe.jsx)(De.a, {
                              className: t.buttonRight,
                              "data-test": "button-right",
                              href: "/new",
                              type: "button",
                              children: p
                                ? Object(Qe.jsx)(He.a, {})
                                : "Add a Listing"
                            })
                          ]
                        })
                      })
                    })
                  );
                }
              }
            ]),
            n
          );
        })(s.a.Component),
        Je = Object(Ne.a)()(
          Object(f.f)(
            Object(x.a)(function(e) {
              var t, n;
              return {
                root: {
                  flexGrow: 1,
                  width: "100vw",
                  color: e.palette.primary.main
                },
                flex: { flexGrow: 1 },
                appBar: Object(b.a)(
                  { backgroundColor: "white", position: "fixed", height: 60 },
                  e.breakpoints.down("sm"),
                  { height: 100 }
                ),
                menuButton: Object(b.a)(
                  { display: "block" },
                  e.breakpoints.down("sm"),
                  { position: "absolute", left: 12, top: 12 }
                ),
                menuWrap: Object(b.a)({}, e.breakpoints.down("sm"), {
                  display: "none"
                }),
                menuLink: Object(b.a)(
                  {
                    backgroundColor: e.palette.secondary.main,
                    color: "white",
                    textTransform: "capitalize",
                    fontSize: "1.5em",
                    fontWeight: "bold",
                    padding: "6px 12px",
                    "&:hover": { backgroundColor: e.palette.secondary.light }
                  },
                  e.breakpoints.down("lg"),
                  {
                    fontSize: "1rem",
                    textAlign: "center",
                    lineHeight: 1.1,
                    padding: "8px 12px"
                  }
                ),
                title:
                  ((t = {
                    flexGrow: 1,
                    color: e.palette.primary.main,
                    fontFamily: '"Alegreya Sans", sans-serif',
                    fontSize: "2.4rem",
                    textDecoration: "none",
                    paddingLeft: 10,
                    fontWeight: 200
                  }),
                  Object(b.a)(t, e.breakpoints.down("md"), {
                    fontSize: "1.6rem",
                    lineHeight: 1.1,
                    fontWeight: 400
                  }),
                  Object(b.a)(t, e.breakpoints.down("sm"), {
                    textAlign: "center",
                    marginTop: 10,
                    paddingLeft: 0
                  }),
                  Object(b.a)(t, e.breakpoints.down("xs"), {
                    fontSize: "1.6rem"
                  }),
                  t),
                loginButton: {
                  textDecoration: "none",
                  height: 30,
                  margin: "auto",
                  backgroundColor: e.palette.primary.main
                },
                buttonRight: {
                  backgroundColor: e.palette.primary.main,
                  color: "white",
                  position: "absolute",
                  right: 0,
                  top: 0,
                  height: 60,
                  padding: "10px 20px",
                  textTransform: "none",
                  "&:hover": { backgroundColor: e.palette.secondary.main }
                },
                avatar: Object(b.a)(
                  { marginRight: 20, right: 85 },
                  e.breakpoints.down("xs"),
                  { display: "none" }
                ),
                admin: { display: "flex" },
                skip: {
                  position: "absolute",
                  top: "-1000px",
                  left: "-1000px",
                  height: "1px",
                  width: "1px",
                  textAlign: "left",
                  overflow: "hidden",
                  "&:focus": {
                    position: "relative",
                    top: 0,
                    left: "-13px",
                    width: "auto",
                    height: "auto",
                    overflow: "visible",
                    textAlign: "center",
                    zIndex: "1000"
                  }
                },
                menuItem: {
                  textAlign: "left",
                  textTransform: "capitalize",
                  fontFamily: [
                    '"Source Sans Pro"',
                    '"Helvetica Neue"',
                    "Helvetica",
                    "Arial",
                    "sans-serif"
                  ].join(","),
                  fontWeight: 700,
                  color: e.palette.secondary.main
                },
                ListItemText: { color: e.palette.secondary.main },
                logo: Object(b.a)(
                  { height: 30, width: "auto", marginRight: 10 },
                  e.breakpoints.down("sm"),
                  { margin: 0 }
                ),
                logoLink: Object(b.a)(
                  { display: "flex" },
                  e.breakpoints.down("sm"),
                  { width: "100%", justifyContent: "center" }
                ),
                menuLabel: { marginLeft: 3 },
                toolbar: Object(b.a)({}, e.breakpoints.down("sm"), {
                  flexWrap: "wrap",
                  paddingTop: 20
                }),
                loginLinkNavBar:
                  ((n = {
                    marginRight: 120,
                    color: e.palette.primary.main,
                    textDecoration: "none"
                  }),
                  Object(b.a)(n, e.breakpoints.down("sm"), {
                    position: "absolute",
                    top: 20,
                    right: 80,
                    marginRight: 0
                  }),
                  Object(b.a)(n, "&:hover", {
                    borderBottom: "1px dotted ".concat(e.palette.primary.main)
                  }),
                  Object(b.a)(n, "&:focus", {
                    borderBottom: "1px dotted ".concat(e.palette.primary.main)
                  }),
                  n),
                drawer: {
                  boxShadow:
                    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
                }
              };
            })(
              Object(p.b)(function(e) {
                return { appState: e.appState, profile: e.profile };
              })(Ye)
            )
          )
        ),
        Ke = function(e) {
          return Object(Qe.jsxs)("div", {
            className: e.classes.footer,
            "data-test": "component-footer",
            children: [
              "\xa9",
              new Date().getFullYear(),
              "\xa0",
              Object(Qe.jsx)("a", {
                className: e.classes.fLink,
                href: "https://cvision.org/",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Community Vision"
              })
            ]
          });
        },
        Xe = function(e) {
          return Object(Qe.jsx)("div", {
            className: e.classes.container,
            "data-test": "component-not-found",
            children: "404 error. Sorry, page not found."
          });
        },
        et = function(e) {
          var t = e.classes,
            n = e.searchFunc,
            a = e.searchZip;
          return Object(Qe.jsxs)("div", {
            className: t.home,
            "data-test": "component-home",
            children: [
              Object(Qe.jsx)("h2", {
                className: t.heroHead,
                children: "Accessible housing starts here"
              }),
              Object(Qe.jsx)("p", {
                className: t.heroSubhead,
                children: "What are you searching for?"
              }),
              Object(Qe.jsxs)("form", {
                className: t.heroForm,
                children: [
                  Object(Qe.jsx)("input", {
                    ref: a,
                    className: t.heroInput,
                    type: "text",
                    placeholder: "Zip code",
                    name: "zip",
                    id: "zip"
                  }),
                  Object(Qe.jsx)(De.a, {
                    type: "button",
                    color: "primary",
                    className: e.classes.searchButton,
                    variant: "contained",
                    onClick: n,
                    children: "Search"
                  })
                ]
              })
            ]
          });
        },
        tt = (function(e) {
          Object(h.a)(n, e);
          var t = Object(g.a)(n);
          function n() {
            return Object(u.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(m.a)(n, [
              {
                key: "render",
                value: function() {
                  return Object(Qe.jsx)("div", {
                    className: this.props.classes.fullWidthContainer,
                    "data-test": "component-login",
                    children: Object(Qe.jsx)("div", {
                      className: this.props.classes.buttonWrap,
                      children: Object(Qe.jsx)(De.a, {
                        type: "button",
                        color: "primary",
                        className: this.props.classes.bigButton,
                        variant: "contained",
                        href: "".concat(
                          "http://localhost:3001",
                          "/api/auth/google"
                        ),
                        children: "Log in or Sign Up"
                      })
                    })
                  });
                }
              }
            ]),
            n
          );
        })(s.a.Component),
        nt = tt,
        at = (function(e) {
          Object(h.a)(n, e);
          var t = Object(g.a)(n);
          function n() {
            return Object(u.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.actions.logout(),
                    window.localStorage.clear(),
                    setTimeout(function() {
                      window.location.assign("/");
                    }, 1e3);
                }
              },
              {
                key: "render",
                value: function() {
                  return Object(Qe.jsx)("div", {
                    className: this.props.classes.fullContainer,
                    "data-test": "component-logout",
                    children: Object(Qe.jsx)(Ae.a, {
                      variant: "h5",
                      className: this.props.classes.message,
                      "data-test": "message",
                      children: "Goodbye!"
                    })
                  });
                }
              }
            ]),
            n
          );
        })(s.a.Component),
        ot = Object(p.b)(null, function(e) {
          return { actions: Object(y.b)(a, e) };
        })(at),
        rt = n(71),
        it = n(149),
        st = n.n(it),
        ct = n(121),
        lt = n.n(ct),
        pt = n(98),
        dt = n.n(pt),
        ut = n(209),
        mt = n.n(ut),
        ht = n(494),
        gt = n(205),
        bt = n.n(gt),
        ft = n(206),
        yt = n.n(ft),
        jt = n(207),
        xt = n.n(jt),
        Ot = n(208),
        St = n.n(Ot),
        vt = ["classes", "className", "message", "onClose", "variant"],
        wt = { success: bt.a, warning: yt.a, error: xt.a, info: St.a },
        _t = Object(x.a)(function(e) {
          return {
            success: { backgroundColor: dt.a[600] },
            error: { backgroundColor: e.palette.error.dark },
            info: { backgroundColor: e.palette.primary.dark },
            warning: { backgroundColor: mt.a[700] },
            icon: { fontSize: 20 },
            iconVariant: { opacity: 0.9, marginRight: 15 },
            message: { display: "flex", alignItems: "center" },
            button: { background: "transparent" }
          };
        })(function(e) {
          var t = e.classes,
            n = e.className,
            a = e.message,
            o = e.onClose,
            r = e.variant,
            i = Object(rt.a)(e, vt),
            s = wt[r];
          return Object(Qe.jsx)(
            ht.a,
            Object(d.a)(
              {
                className: st()(t[r], n),
                "data-test": "component-custom-snackbar",
                "aria-describedby": "client-snackbar",
                message: Object(Qe.jsxs)("span", {
                  id: "client-snackbar",
                  className: t.message,
                  "data-test": "message",
                  children: [
                    Object(Qe.jsx)(s, {
                      className: st()(t.icon, t.iconVariant),
                      "data-test": "message-icon"
                    }),
                    a
                  ]
                }),
                action: [
                  Object(Qe.jsx)(
                    Ue.a,
                    {
                      "aria-label": "Close",
                      color: "inherit",
                      className: t.close,
                      onClick: o,
                      "data-test": "icon-button",
                      children: Object(Qe.jsx)(lt.a, {
                        className: t.icon,
                        "data-test": "close-icon"
                      })
                    },
                    "close"
                  )
                ]
              },
              i
            )
          );
        }),
        kt = n(517),
        Lt = (function(e) {
          Object(h.a)(n, e);
          var t = Object(g.a)(n);
          function n() {
            var e;
            Object(u.a)(this, n);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((e = t.call.apply(t, [this].concat(o))).state = {
                open: !1,
                message: "",
                variant: "info",
                action: null
              }),
              (e.openSnackbar = function(t, n, a) {
                console.log("openSnackbar"),
                  e.setState({ open: !0, variant: t, message: n, action: a });
              }),
              (e.handleSnackbarClose = function() {
                e.setState({
                  open: !1,
                  message: "",
                  variant: "info",
                  action: null
                });
              }),
              e
            );
          }
          return (
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  Ee = this.openSnackbar;
                }
              },
              {
                key: "render",
                value: function() {
                  var e = Object(Qe.jsx)("span", {
                    id: "snackbar-message-id",
                    dangerouslySetInnerHTML: { __html: this.state.message },
                    "data-test": "message-span"
                  });
                  return Object(Qe.jsx)(kt.a, {
                    anchorOrigin: { vertical: "bottom", horizontal: "right" },
                    open: this.state.open,
                    autoHideDuration: 6e3,
                    onClose: this.handleSnackbarClose,
                    "data-test": "component-notifier",
                    children: Object(Qe.jsx)(_t, {
                      variant: this.state.variant,
                      message: e,
                      open: this.state.open,
                      action: this.state.action,
                      onClose: this.handleSnackbarClose,
                      "data-test": "custom-snackbar-listing-wrapper"
                    })
                  });
                }
              }
            ]),
            n
          );
        })(s.a.Component),
        Ct = function(e, t, n, a) {
          if ("function" === typeof Ee || a) return Ee(e, t);
          setTimeout(function() {
            return Ee(e, t);
          }, 100);
        },
        Et = Lt,
        Tt = n(495),
        Nt = n(496),
        It = n(497),
        Rt = (function(e) {
          Object(h.a)(n, e);
          var t = Object(g.a)(n);
          function n() {
            return Object(u.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  var e,
                    t,
                    n = this;
                  this.props.match && this.props.match.params.id
                    ? ((e = this.props.match.params.id),
                      (t = this.props.match.params.token),
                      window.localStorage.setItem("userId", e),
                      window.localStorage.setItem("authToken", t),
                      console.log("setting logged in here"),
                      this.props.actions.setLoggedIn(e, t),
                      console.log(this.props.appState),
                      window.history.replaceState(
                        null,
                        null,
                        "".concat(window.location.origin, "/admin")
                      ))
                    : ((e =
                        this.props.profile.profile._id ||
                        window.localStorage.getItem("userId")),
                      (t = window.localStorage.getItem("authToken")
                        ? window.localStorage.getItem("authToken")
                        : this.props.appState.authToken)),
                    this.props.api
                      .getProfile(t, e)
                      .then(function(a) {
                        if ("GET_PROFILE_SUCCESS" === a.type) {
                          console.log("setting logged in, userId, authToken"),
                            console.log(e, t),
                            n.props.actions.setLoggedIn(e, t),
                            console.log(n.props.appState);
                          var o = window.localStorage.getItem("redirect");
                          o &&
                            (console.log("redirect: ".concat(o)),
                            n.props.history.push(o),
                            window.localStorage.removeItem("redirect"));
                        } else console.log("not logged in"), console.log(a), Ct("error", "Please log in to view this page.");
                      })
                      .catch(function(e) {
                        Ct("error", e);
                      });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    n = e.profile,
                    a = this.props.appState.loggedIn,
                    o = window.localStorage.getItem("redirect"),
                    r = n.profile.companyCity
                      ? ""
                          .concat(n.profile.companyCity, ", ")
                          .concat(n.profile.companyState, " ")
                          .concat(n.profile.companyZip)
                      : "";
                  return Object(Qe.jsx)("div", {
                    className: t.container,
                    "data-test": "component-dashboard",
                    children:
                      a &&
                      !o &&
                      Object(Qe.jsxs)(Tt.a, {
                        className: t.card,
                        children: [
                          Object(Qe.jsx)(Nt.a, {
                            className: t.media,
                            children: Object(Qe.jsx)($e.a, {
                              alt: "".concat(n.profile.name),
                              className: t.avatar,
                              src: n.profile.avatarUrl
                            })
                          }),
                          Object(Qe.jsxs)(It.a, {
                            className: t.content,
                            children: [
                              Object(Qe.jsx)(Ae.a, {
                                variant: "h5",
                                className: t.name,
                                children: "".concat(n.profile.name)
                              }),
                              Object(Qe.jsx)(Ae.a, {
                                variant: "h6",
                                className: t.secondary,
                                children: "".concat(n.profile.email)
                              }),
                              n.profile.phone &&
                                Object(Qe.jsx)(Ae.a, {
                                  variant: "h6",
                                  className: t.secondary,
                                  children: "".concat(n.profile.phone)
                                }),
                              n.profile.companyName &&
                                Object(Qe.jsxs)("div", {
                                  children: [
                                    Object(Qe.jsx)(Ae.a, {
                                      variant: "h5",
                                      className: t.name,
                                      children: "".concat(n.profile.companyName)
                                    }),
                                    Object(Qe.jsx)(Ae.a, {
                                      variant: "h6",
                                      className: t.secondary,
                                      children: "".concat(
                                        n.profile.companyStreet
                                      )
                                    }),
                                    Object(Qe.jsx)(Ae.a, {
                                      variant: "h6",
                                      className: t.secondary,
                                      children: r
                                    })
                                  ]
                                })
                            ]
                          })
                        ]
                      })
                  });
                }
              }
            ]),
            n
          );
        })(s.a.Component),
        At = Object(p.b)(
          function(e) {
            return { appState: e.appState, profile: e.profile };
          },
          function(e) {
            return { actions: Object(y.b)(a, e), api: Object(y.b)(o, e) };
          }
        )(Rt),
        Dt = Object(f.f)(
          Object(x.a)(function(e) {
            return {
              root: { margin: 20, padding: 20, maxWidth: 1200 },
              card: {
                margin: "auto",
                width: "100%",
                maxWidth: 300,
                position: "relative",
                backgroundColor: "transparent"
              },
              media: {
                height: 0,
                paddingTop: "20%",
                position: "relative",
                backgroundColor: "transparent"
              },
              avatar: {
                width: 80,
                height: 80,
                position: "absolute",
                top: 20,
                left: "calc(50% - 40px)"
              },
              container: {
                height: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              },
              name: {
                color: e.palette.primary.main,
                textAlign: "center",
                marginTop: 35
              },
              secondary: { color: e.palette.textColor, textAlign: "center" },
              content: { backgroundColor: "white", borderRadius: 4 }
            };
          })(At)
        ),
        Ut = n(23),
        Pt = n.n(Ut),
        Gt = n(41),
        Ft = n(197),
        Bt = n(199),
        Wt = n(200),
        zt = n(185),
        $t = n(198),
        Mt = n(48),
        Ht = n(194),
        Zt = n(195),
        Vt = n(436),
        qt = n(438),
        Qt = n(88),
        Yt = n(150),
        Jt = n.n(Yt),
        Kt = n(3),
        Xt = n.n(Kt),
        en = n(499),
        tn = n(432),
        nn = n(439),
        an = n(513),
        on = n(440),
        rn = n(435),
        sn = n(434),
        cn = n(500),
        ln = n(437),
        pn =
          (n(512),
          n(501),
          n(222),
          n(219),
          n(218),
          n(220),
          n(212),
          n(213),
          n(215),
          n(216),
          n(217),
          n(223),
          n(214),
          n(221),
          n(224),
          n(210),
          n(211),
          n(498)),
        dn = n(225),
        un = n.n(dn),
        mn = [
          "input",
          "id",
          "name",
          "label",
          "meta",
          "classes",
          "twocol",
          "short",
          "mobile",
          "additionalOnChange",
          "min",
          "step",
          "formControlName",
          "inputProps",
          "inputLabelProps",
          "startAdornment",
          "endAdornment"
        ],
        hn = [
          "input",
          "id",
          "name",
          "label",
          "meta",
          "classes",
          "twocol",
          "short",
          "mobile",
          "additionalOnChange",
          "formControlName",
          "rows",
          "inputProps"
        ],
        gn = [
          "input",
          "name",
          "id",
          "label",
          "classes",
          "align",
          "meta",
          "labelWidth",
          "options",
          "short",
          "twocol",
          "mobile",
          "formControlName",
          "inputProps",
          "inputLabelProps"
        ],
        bn = [
          "input",
          "label",
          "id",
          "validate",
          "classes",
          "meta",
          "formControlName"
        ],
        fn = function(e) {
          return Ct(
            "error",
            e || "Sorry, something went wrong. Please try again."
          );
        },
        yn = function(e) {
          var t;
          return {
            formContainer:
              ((t = { padding: "80px 0 140px 0", margin: "auto 0 auto 50%" }),
              Object(b.a)(t, e.breakpoints.down("xl"), {
                margin: "44px 0 auto 50%"
              }),
              Object(b.a)(t, e.breakpoints.down("lg"), { padding: "20px 0" }),
              Object(b.a)(t, e.breakpoints.down("md"), { margin: "44px auto" }),
              Object(b.a)(t, e.breakpoints.only("xs"), {
                width: "100vw",
                position: "absolute",
                left: 0,
                top: 0,
                margin: "36px auto"
              }),
              t),
            formContainerEmbed: Object(b.a)(
              { padding: "80px 0 140px 0", margin: "auto" },
              e.breakpoints.only("xs"),
              {
                width: "100vw",
                position: "absolute",
                left: 0,
                top: 0,
                margin: "auto"
              }
            ),
            sectionContainer: {},
            head: {
              color: e.palette.primary.light,
              fontSize: "2em",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 15
            },
            form: Object(b.a)(
              {
                maxWidth: 600,
                margin: "auto",
                background: "white",
                padding: "20px 20px 40px 20px",
                borderRadius: "0 0 4px 4px",
                marginTop: 60
              },
              e.breakpoints.only("xs"),
              { padding: "15px 15px 40px 15px" }
            ),
            formTitle: {
              textAlign: "center",
              fontSize: "2.5em",
              color: e.palette.primary.main
            },
            buttonWrap: {
              width: "100%",
              padding: "0 20px 40px 0",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 20
            },
            buttonWrapTab3: {
              width: "100%",
              padding: "40px 20px 0 0",
              display: "flex",
              justifyContent: "flex-start"
            },
            buttonWrapCAPE: {
              width: "100%",
              padding: "0 20px 40px 0",
              display: "flex",
              justifyContent: "space-between"
            },
            next: {
              textTransform: "none",
              fontSize: "1.3rem",
              padding: "6px 20px",
              color: "white",
              "&:hover": { backgroundColor: e.palette.primary.light }
            },
            nextSmall: {
              textTransform: "none",
              fontSize: ".8rem",
              padding: "3px 10px",
              color: e.palette.secondary.light,
              "&:hover": { backgroundColor: e.palette.primary.light }
            },
            backSmall: {
              textTransform: "none",
              fontSize: ".8rem",
              padding: "3px 10px",
              color: e.palette.secondary.light,
              "&:hover": { backgroundColor: e.palette.primary.light }
            },
            verticalGroup: {
              width: "100%",
              display: "flex",
              flexDirection: "column"
            },
            horizGroup: {
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            },
            back: {
              textTransform: "none",
              fontSize: "1.3rem",
              padding: "6px 20px",
              color: e.palette.secondary.main,
              "&:hover": { backgroundColor: e.palette.primary.light },
              marginRight: 40
            },
            formSection: { paddingTop: 20 },
            group: {
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "center"
            },
            groupLeft: {
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start"
            },
            select: { width: "100%", margin: "0 0 30px 0" },
            selectRight: {
              textAlign: "right",
              width: "100%",
              margin: "0 0 30px 0",
              direction: "rtl"
            },
            failedText: { color: "red" },
            formButton: { width: "100%", padding: 20, margin: "25px 0 40px" },
            clearButton: { width: "100%", padding: 10, margin: "0" },
            formControl: { width: "100%" },
            formControlLabel: { width: "100%" },
            formControlDate: { width: "15%", minWidth: 80, marginRight: 20 },
            formLabel: { margin: "10px 0" },
            currency: { flexGrow: 0 },
            parking: { maxWidth: 188 },
            quadrant: Object(b.a)({ width: "100%" }, e.breakpoints.only("xs"), {
              marginRight: "0 !important",
              width: "100%"
            }),
            currency2: Object(b.a)(
              { marginLeft: 20 },
              e.breakpoints.only("xs"),
              { marginLeft: 0 }
            ),
            months: { marginRight: 15, minWidth: 188 },
            formHelperText: { margin: "-25px 0 30px 0" },
            checkboxErrorText: { margin: "-10px 0 10px 0" },
            formGroup: {
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start"
            },
            formGroup2Col: Object(b.a)(
              {
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between"
              },
              e.breakpoints.down("xs"),
              { flexWrap: "wrap" }
            ),
            formGroup2ColShort: {
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              width: 280
            },
            formGroupTopMargin: { marginTop: 30 },
            input: { width: "100%", margin: "0 0 30px 0" },
            input2Col: Object(b.a)({ width: "48%" }, e.breakpoints.down("xs"), {
              width: "100%",
              display: "block"
            }),
            formGroupFeatures: {
              padding: 20,
              border: "1px solid rgba(117, 117, 117)"
            },
            marginRight: { marginRight: 15, flexGrow: 1 },
            flexStatic: { marginRight: 15, flexShrink: 0, minWidth: 137 },
            controlCheckbox: { margin: 0, color: "rgba(0, 0, 0, 0.54)" },
            controlCheckboxMargin: { margin: "-35px 0 40px 0" },
            formHelperTextLegal: {
              margin: "-50px 0 50px 0",
              fontSize: "14px",
              lineHeight: "1.2em"
            },
            sigBox: {
              border: "1px solid lightgrey",
              "border-radius": "5px",
              margin: "0 0 32px",
              width: "100%"
            },
            buttonLink: {
              background: "none",
              border: "none",
              padding: "0",
              font: " inherit",
              "border-bottom": "1px solid blue",
              cursor: " pointer",
              color: "blue"
            },
            horizRadio: { display: "flex", flexDirection: "row" },
            horizRadioCenter: {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: "auto",
              textAlign: "center"
            },
            horizRadioBold: { fontWeight: 700 },
            subhead: {
              color: e.palette.primary.light,
              fontSize: "1.5em",
              fontWeight: 400,
              paddingBottom: 20
            },
            paymentCopy: { paddingBottom: "1.5em" },
            card: Object(b.a)({ display: "flex" }, e.breakpoints.down("xs"), {
              flexDirection: "column"
            }),
            details: { display: "flex", flexDirection: "column" },
            content: { flex: "1 0 auto" },
            cover: { minWidth: 200, minHeight: 200 },
            cardHead: {
              color: e.palette.primary.light,
              fontWeight: 400,
              paddingBottom: 10
            },
            quoteAttr: {
              color: e.palette.primary.light,
              fontStyle: "italic",
              paddingTop: 10
            },
            pullQuote: { textIndent: 20 },
            suggestedAmounts: {
              display: "block",
              flexWrap: "wrap",
              margin: "0 -1.666666666666667% 13px",
              paddingTop: 20,
              marginTop: 15,
              backgroundColor: "#FBE796"
            },
            suggestedAmountBoxes: { flexDirection: "row", flexWrap: "nowrap" },
            suggestedAmountBox: {
              width: "21%",
              height: 60,
              margin: "13px 1.666666666666667% 0",
              display: "inline-block"
            },
            boxLabel: {
              height: "100%",
              fontSize: 20,
              lineHeight: "60px",
              fontWeight: 300,
              color: "#4C4C4C",
              textAlign: "center",
              border: "1px solid #C4C3C3",
              borderRadius: 3,
              display: "block",
              transition:
                "color 0.1s, background-color 0.1s, border-color 0.1s, font-weight 0.1s",
              position: "relative",
              cursor: "pointer",
              margin: 0
            },
            boxInput: {
              float: "left",
              opacity: 0,
              width: 0,
              height: 0,
              position: "absolute",
              padding: 0,
              margin: 0,
              border: 0,
              "&:focus + label": { outline: "rgba(83,16,120, 0.5) auto 3px" },
              "&:checked + label": {
                borderColor: "#531078",
                color: "#531078",
                borderWidth: 2,
                fontWeight: 700
              },
              "&:checked + $boxLabel": {
                borderColor: "#531078",
                color: "#531078",
                borderWidth: 2,
                fontWeight: 700
              }
            },
            capeAmount: {
              display: "flex",
              flexDirection: "row",
              width: "100%"
            },
            boxCurrency: {
              fontSize: 14,
              lineHeight: "14px",
              fontWeight: 400,
              verticalAlign: "text-top",
              position: "absolute",
              top: 22,
              left: -22,
              whiteSpace: "nowrap"
            },
            boxItem: { position: "absolute", height: "100%" },
            boxAmount: { position: "relative", left: -10 },
            radioLabel: { textAlign: "center" },
            bodyCenter: { width: "100%", textAlign: "center" },
            capeRadioLabel: {
              fontSize: "1.2em",
              color: e.palette.primary.light,
              fontWeight: 700,
              textAlign: "center"
            }
          };
        },
        jn = {
          dogs: "Dogs OK",
          cats: "Cats OK",
          no_pets: "No pets",
          furnished: "Furnished",
          no_smoking: "No smoking",
          gated_entry: "Gated entry",
          "60_in_circular_space_for_turning":
            "60-inch circular space for turning",
          "32_in_wide_doorways": "32-inch wide doorways",
          accessible_route_to_unit: "Accessible route to unit",
          bathroom_wall_reinforcements: "Wall reinforcements in bathroom",
          bathroom_grab_bars: "Grab bars in bathroom",
          shower_seat: "Shower seat",
          bathroom_56_x_60_in_floor_clearance:
            "56x60-inch floor clearance in bathroom",
          kitchen_40_in_aisle: "40-inch aisle in kitchen",
          kitchen_60_in_floor_clearance_if_U_shaped:
            "60-inch floor clearance in U-shaped kitchen",
          kitchen_sink_knee_and_toe_clearance:
            "Knee and toe clearance at kitchen sink",
          kitchen_sink_34_in_above_floor:
            "Kitchen sink no more than 34 inches above floor",
          kitchen_work_surface_34_in_above_floor:
            "Work surface in kitchen no more than 34 inches above floor",
          front_control_range: "Front-control range",
          visible_notification_alarm_system:
            "Visible notification alarm system",
          operable_parts_48_in_above_floor:
            "Operable parts (light switches, thermostats, peepholes) no more than 48 inches above floor"
        },
        xn = Object.keys(jn),
        On = function(e) {
          var t = [];
          return (
            xn.forEach(function(n) {
              e[n] && t.push(n);
            }),
            console.log(t),
            t
          );
        },
        Sn = function(e) {
          return Object(Qe.jsx)(pn.a, {
            position: "start",
            children: Object(Qe.jsx)(un.a, { className: e.iconGray })
          });
        },
        vn = function(e) {
          return Object(Qe.jsx)(pn.a, {
            position: "end",
            children: Object(Qe.jsx)("span", {
              className: e.iconGray,
              children: "months"
            })
          });
        },
        wn = function(e) {
          var t = e.input,
            n = e.id,
            a = (e.name, e.label),
            o = e.meta,
            r = o.touched,
            i = o.error,
            s = e.classes,
            c = e.twocol,
            l = e.short,
            p = e.mobile,
            u = e.additionalOnChange,
            m = e.min,
            h = e.step,
            g = e.formControlName,
            b = e.inputProps,
            f = e.inputLabelProps,
            y = e.startAdornment,
            j = e.endAdornment,
            x = Object(rt.a)(e, mn);
          return Object(Qe.jsx)(
            en.a,
            Object(d.a)(
              Object(d.a)(
                Object(d.a)(
                  {
                    label: a,
                    error: !(!r || !i),
                    variant: "outlined",
                    className: s[g] || s.input,
                    style:
                      c && !p
                        ? { width: "48%" }
                        : l
                        ? { width: 150 }
                        : { width: "100%", marginBottom: 30 },
                    helperText: r && i,
                    required: !(!r || !i)
                  },
                  t
                ),
                x
              ),
              {},
              {
                "data-test": "component-text-field",
                inputProps: Object(d.a)({ id: n, min: m, step: h }, b),
                InputProps: {
                  startAdornment: "currency" === y ? Sn(s) : null,
                  endAdornment: "months" === j ? vn(s) : null
                },
                InputLabelProps: f,
                onBlur: function(e) {
                  t.onBlur(), u && u(e);
                }
              }
            )
          );
        },
        _n = function(e) {
          return "right" === e ? { direction: "ltr" } : {};
        },
        kn = function(e) {
          var t = e.input,
            n = e.name,
            a = e.id,
            o = e.label,
            r = e.classes,
            i = e.align,
            s = e.meta,
            c = s.error,
            l = s.touched,
            p = e.labelWidth,
            u = e.options,
            m = e.short,
            h = e.twocol,
            g = e.mobile,
            b = e.formControlName,
            f = e.inputProps,
            y = (e.inputLabelProps, Object(rt.a)(e, gn));
          return Object(Qe.jsxs)(
            sn.a,
            Object(d.a)(
              Object(d.a)(
                {
                  variant: "outlined",
                  className: r[b] || r.formControl,
                  error: !(!c || !l)
                },
                y
              ),
              {},
              {
                required: l && "Required" === c,
                style: m
                  ? { width: 80 }
                  : g
                  ? { width: "100%" }
                  : h
                  ? { marginRight: 20 }
                  : {},
                children: [
                  Object(Qe.jsx)(rn.a, { htmlFor: n, children: o }),
                  Object(Qe.jsx)(
                    nn.a,
                    Object(d.a)(
                      Object(d.a)(
                        {
                          native: !0,
                          input: Object(Qe.jsx)(on.a, {
                            labelWidth: p,
                            inputProps: Object(d.a)({ id: a }, f)
                          }),
                          className: "right" === i ? r.selectRight : r.select,
                          value: t.value ? t.value.toLowerCase() : "",
                          onChange: t.onChange
                        },
                        y
                      ),
                      {},
                      {
                        "data-test": "component-select",
                        children: u.map(function(e) {
                          return Object(Qe.jsx)(
                            "option",
                            {
                              value: e ? e.toLowerCase() : "",
                              style: _n(i),
                              children: e
                            },
                            Jt()()
                          );
                        })
                      }
                    )
                  )
                ]
              }
            )
          );
        },
        Ln = function(e) {
          var t = e.input,
            n = e.label,
            a = e.id,
            o = (e.validate, e.classes),
            r = e.meta,
            i = r.touched,
            s = r.error,
            c = e.formControlName,
            l = Object(rt.a)(e, bn);
          return Object(Qe.jsxs)(sn.a, {
            error: !(!i || !s),
            className: o[c] || o.formControl,
            children: [
              Object(Qe.jsx)(cn.a, {
                label: n,
                control: Object(Qe.jsx)(
                  an.a,
                  Object(d.a)(
                    Object(d.a)(
                      Object(d.a)({ color: "primary", checked: !!t.value }, l),
                      t
                    ),
                    {},
                    {
                      className: o.checkbox,
                      "data-test": "component-checkbox",
                      name: "checkbox",
                      inputProps: { id: a }
                    }
                  )
                )
              }),
              i &&
                s &&
                Object(Qe.jsx)(ln.a, {
                  className: o.checkboxErrorText,
                  children: s
                })
            ]
          });
        };
      (en.a.propTypes = {
        input: Xt.a.shape({
          onBlur: Xt.a.func,
          onChange: Xt.a.func,
          onDragStart: Xt.a.func,
          onDrop: Xt.a.func,
          onFocus: Xt.a.func,
          value: Xt.a.string
        }),
        name: Xt.a.string,
        label: Xt.a.string,
        touched: Xt.a.bool,
        error: Xt.a.oneOfType([Xt.a.string, Xt.a.bool]),
        helperText: Xt.a.oneOfType([Xt.a.string, Xt.a.bool])
      }),
        (nn.a.propTypes = {
          input: Xt.a.shape({
            onBlur: Xt.a.func,
            onChange: Xt.a.func,
            onDragStart: Xt.a.func,
            onDrop: Xt.a.func,
            onFocus: Xt.a.func,
            value: Xt.a.string
          }),
          name: Xt.a.string,
          label: Xt.a.string,
          labelWidth: Xt.a.string,
          formControlName: Xt.a.string,
          options: Xt.a.array,
          touched: Xt.a.bool,
          error: Xt.a.oneOfType([Xt.a.string, Xt.a.bool])
        }),
        (an.a.propTypes = {
          input: Xt.a.shape({
            onBlur: Xt.a.func,
            onChange: Xt.a.func,
            onDragStart: Xt.a.func,
            onDrop: Xt.a.func,
            onFocus: Xt.a.func,
            value: Xt.a.string
          }),
          name: Xt.a.string,
          label: Xt.a.string,
          touched: Xt.a.bool,
          error: Xt.a.oneOfType([Xt.a.string, Xt.a.bool]),
          checked: Xt.a.bool
        }),
        (sn.a.propTypes = {
          touched: Xt.a.bool,
          error: Xt.a.oneOfType([Xt.a.string, Xt.a.bool])
        });
      var Cn = [
          "",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12"
        ],
        En = function(e) {
          for (
            var t = (function(e) {
                switch (e) {
                  case "02":
                    return 29;
                  case "04":
                  case "06":
                  case "09":
                  case "11":
                    return 30;
                  default:
                    return 31;
                }
              })(e.formValues.mm || e.formValues.hiremm),
              n = [],
              a = 1;
            a <= t;
            a++
          )
            a < 10 ? n.push("0" + a) : n.push(a.toString());
          return n.unshift(""), n;
        },
        Tn = function() {
          for (
            var e = [], t = new Date().getFullYear() - 109;
            t <= new Date().getFullYear();
            t++
          )
            e.unshift(t.toString());
          return e.unshift(""), e;
        },
        Nn = kn,
        In = wn,
        Rn = function(e) {
          var t = e.input,
            n = e.id,
            a = (e.name, e.label),
            o = e.meta,
            r = o.touched,
            i = o.error,
            s = e.classes,
            c = e.twocol,
            l = e.short,
            p = e.mobile,
            u = e.additionalOnChange,
            m = e.formControlName,
            h = e.rows,
            g = (e.inputProps, Object(rt.a)(e, hn));
          return Object(Qe.jsx)(
            tn.a,
            Object(d.a)(
              Object(d.a)(
                Object(d.a)(
                  {
                    label: a,
                    rows: h,
                    error: !(!r || !i) || void 0,
                    variant: "outlined",
                    className: s[m] || s.input,
                    style:
                      c && !p
                        ? { width: "48%" }
                        : l
                        ? { width: 150 }
                        : { width: "100%", marginBottom: 30 },
                    required: !(!r || !i)
                  },
                  t
                ),
                g
              ),
              {},
              {
                "data-test": "component-text-area",
                id: n,
                onBlur: function(e) {
                  t.onBlur(), u && u(e);
                }
              }
            )
          );
        },
        An = Ln,
        Dn = jn,
        Un = Object(Zt.a)({
          form: "addListing",
          validate: function(e) {
            var t = {};
            return (
              [
                "propertyName",
                "dd",
                "mm",
                "yyyy",
                "propertyStreet",
                "propertyZip",
                "propertyState",
                "propertyCity",
                "propertyEmail",
                "propertyPhone",
                "quadrant",
                "propertyCounty",
                "listingUrl",
                "primaryImage",
                "monthlyRent",
                "deposit",
                "leaseLength",
                "bedrooms",
                "squareFt",
                "features",
                "laundryType",
                "parkingType",
                "parkingFee"
              ].forEach(function(n) {
                e[n] || (t[n] = "Required");
              }),
              e.homeEmail &&
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                  e.homeEmail
                ) &&
                (t.homeEmail = "Invalid email address (e.g. sample@email.com)"),
              e.listingUrl &&
                !/^(ftp|http|https):\/\/[^ "]+$/.test(e.listingUrl) &&
                (t.listingUrl = "Please enter a valid URL"),
              e.primaryImage &&
                !/^(ftp|http|https):\/\/[^ "]+$/.test(e.primaryImage) &&
                (t.primaryImage = "Please enter a valid URL"),
              e.propertyPhone &&
                !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
                  e.propertyPhone
                ) &&
                (t.propertyPhone = "Invalid phone number (e.g. 555-123-4567)"),
              e.propertyZip &&
                5 !== e.propertyZip.length &&
                (t.propertyZip = "Must be at exactly 5 characters long"),
              t
            );
          },
          destroyOnUnmount: !0,
          forceUnregisterOnUnmount: !0,
          enableReinitialize: !0,
          keepDirtyOnReinitialize: !0,
          updateUnregisteredFields: !0,
          onSubmitFail: Ze
        })(function(e) {
          var t = e.onSubmit,
            n = e.classes,
            a = e.edit,
            o = e.width,
            r = e.verifyCallback,
            i = Object.keys(Dn).map(function(e) {
              return Object(Qe.jsx)(
                Ht.a,
                {
                  label: Dn[e],
                  name: e,
                  id: e,
                  type: "checkbox",
                  formControlName: "controlCheckbox",
                  classes: n,
                  component: An
                },
                e
              );
            });
          return (
            console.log(e),
            Object(Qe.jsx)("div", {
              "data-test": "component-add-listing",
              className: n.sectionContainer,
              children: Object(Qe.jsxs)("form", {
                onSubmit: e.handleSubmit(t),
                id: "addListing",
                className: n.form,
                children: [
                  Object(Qe.jsx)(Ae.a, {
                    className: n.formTitle,
                    variant: "h3",
                    children: "Add Listing"
                  }),
                  Object(Qe.jsxs)("div", {
                    className: n.formSection,
                    children: [
                      Object(Qe.jsx)(Ht.a, {
                        label: "Property Name",
                        name: "propertyName",
                        id: "propertyName",
                        type: "text",
                        classes: n,
                        component: In
                      }),
                      Object(Qe.jsx)(Vt.a, {
                        className: n.formLabel,
                        component: "legend",
                        children: "Address"
                      }),
                      Object(Qe.jsx)(Ht.a, {
                        label: "Street Address",
                        name: "propertyStreet",
                        id: "propertyStreet",
                        type: "text",
                        classes: n,
                        component: In
                      }),
                      Object(Qe.jsxs)(qt.a, {
                        className: n.formGroup,
                        row: !0,
                        classes: { root: n.formGroup2Col },
                        children: [
                          Object(Qe.jsx)(Ht.a, {
                            label: "City",
                            name: "propertyCity",
                            id: "propertyCity",
                            type: "text",
                            twocol: !0,
                            mobile: !Object(Ne.b)("sm", o),
                            classes: n,
                            component: In
                          }),
                          Object(Qe.jsx)(Ht.a, {
                            label: "State",
                            name: "propertyState",
                            id: "propertyState",
                            type: "select",
                            short: !0,
                            mobile: !Object(Ne.b)("sm", o),
                            classes: n,
                            component: Nn,
                            options: ["", "OR", "WA"],
                            labelWidth: 80
                          }),
                          Object(Qe.jsx)(Ht.a, {
                            label: "Zip",
                            name: "propertyZip",
                            id: "propertyZip",
                            short: !0,
                            mobile: !Object(Ne.b)("sm", o),
                            type: "text",
                            classes: n,
                            component: In
                          })
                        ]
                      }),
                      Object(Qe.jsxs)(qt.a, {
                        row: !0,
                        classes: { root: n.formGroup2Col },
                        children: [
                          Object(Qe.jsx)(Ht.a, {
                            "data-test": "select-quadrant",
                            label: "Quadrant",
                            name: "quadrant",
                            id: "quadrant",
                            type: "select",
                            classes: n,
                            component: Nn,
                            formControlName: "quadrant",
                            options: ["", "N", "NE", "NW", "SE", "SW"],
                            onChange: function() {},
                            labelWidth: 100,
                            twocol: !0
                          }),
                          Object(Qe.jsx)(Ht.a, {
                            label: "County",
                            name: "propertyCounty",
                            id: "propertyCounty",
                            type: "text",
                            classes: n,
                            component: Nn,
                            options: [
                              "",
                              "Multnomah",
                              "Washington",
                              "Clackamas",
                              "Clark"
                            ],
                            labelWidth: 100
                          })
                        ]
                      }),
                      Object(Qe.jsx)(Ht.a, {
                        label: "Property contact phone",
                        name: "propertyPhone",
                        id: "propertyPhone",
                        type: "tel",
                        classes: n,
                        component: In
                      }),
                      Object(Qe.jsx)(Ht.a, {
                        label: "Property contact email",
                        name: "propertyEmail",
                        id: "propertyEmail",
                        type: "email",
                        classes: n,
                        component: In
                      }),
                      Object(Qe.jsx)(Ht.a, {
                        label: "Link to property listing",
                        name: "listingUrl",
                        id: "listingUrl",
                        type: "url",
                        classes: n,
                        component: In
                      }),
                      Object(Qe.jsx)(Ht.a, {
                        label: "Link to property image",
                        name: "primaryImage",
                        id: "primaryImage",
                        type: "url",
                        classes: n,
                        component: In
                      }),
                      Object(Qe.jsx)(Vt.a, {
                        className: n.formLabel,
                        component: "legend",
                        children: "Date Available"
                      }),
                      Object(Qe.jsxs)(qt.a, {
                        row: !0,
                        classes: { root: n.formGroup2ColShort },
                        children: [
                          Object(Qe.jsx)(Ht.a, {
                            label: "Month",
                            name: "mm",
                            id: "mm",
                            type: "select",
                            classes: n,
                            formControlName: "formControlDate",
                            component: Nn,
                            labelWidth: 41,
                            options: Cn
                          }),
                          Object(Qe.jsx)(Ht.a, {
                            label: "Day",
                            name: "dd",
                            id: "dd",
                            type: "select",
                            formControlName: "formControlDate",
                            classes: n,
                            component: Nn,
                            labelWidth: 24,
                            options: En(e)
                          }),
                          Object(Qe.jsx)(Ht.a, {
                            label: "Year",
                            name: "yyyy",
                            id: "yyyy",
                            type: "select",
                            formControlName: "formControlDate",
                            classes: n,
                            component: Nn,
                            labelWidth: 30,
                            options: Tn()
                          })
                        ]
                      }),
                      Object(Qe.jsxs)(qt.a, {
                        row: !0,
                        classes: { root: n.formGroup2Col },
                        children: [
                          Object(Qe.jsx)(Ht.a, {
                            label: "Monthly Rent",
                            name: "monthlyRent",
                            id: "monthlyRent",
                            type: "number",
                            min: 0.01,
                            step: 0.01,
                            classes: n,
                            component: In,
                            formControlName: "currency",
                            inputProps: { style: { paddingLeft: 15 } },
                            inputLabelProps: { style: { paddingLeft: 15 } },
                            startAdornment: "currency"
                          }),
                          Object(Qe.jsx)(Ht.a, {
                            label: "Deposit",
                            name: "deposit",
                            id: "deposit",
                            type: "number",
                            min: 0.01,
                            step: 0.01,
                            classes: n,
                            component: In,
                            formControlName: "currency2",
                            inputProps: { style: { paddingLeft: 15 } },
                            inputLabelProps: { style: { paddingLeft: 15 } },
                            startAdornment: "currency"
                          })
                        ]
                      }),
                      Object(Qe.jsxs)(qt.a, {
                        row: !0,
                        classes: { root: n.formGroup2Col },
                        children: [
                          Object(Qe.jsx)(Ht.a, {
                            "data-test": "input-bedrooms",
                            label: "Bedrooms",
                            name: "bedrooms",
                            id: "bedrooms",
                            type: "select",
                            options: ["", "Studio", "1", "2", "3", "4+"],
                            classes: n,
                            labelWidth: 41,
                            component: Nn,
                            formControlName: "flexStatic",
                            inputProps: { style: { paddingLeft: 20 } },
                            inputLabelProps: { style: { paddingLeft: 20 } }
                          }),
                          Object(Qe.jsx)(Ht.a, {
                            "data-test": "input-lease-length",
                            label: "Lease Length",
                            name: "leaseLength",
                            id: "leaseLength",
                            min: 1,
                            max: 12,
                            step: 1,
                            classes: n,
                            component: In,
                            twocol: !0,
                            formControlName: "months",
                            inputProps: { style: { paddingRight: 30 } },
                            inputLabelProps: { style: { paddingRight: 30 } },
                            endAdornment: "months"
                          }),
                          Object(Qe.jsx)(Ht.a, {
                            label: "Square Ft",
                            name: "squareFt",
                            id: "squareFt",
                            type: "number",
                            min: 0,
                            step: 1,
                            classes: n,
                            component: In
                          })
                        ]
                      }),
                      Object(Qe.jsxs)(qt.a, {
                        row: !0,
                        classes: { root: n.formGroup2Col },
                        children: [
                          Object(Qe.jsx)(Ht.a, {
                            label: "Laundry Type",
                            name: "laundryType",
                            id: "laundryType",
                            type: "select",
                            classes: n,
                            component: Nn,
                            labelWidth: 41,
                            options: [
                              "",
                              "None",
                              "Washer/Dryer In-unit",
                              "Washer/Dryer hookup",
                              "Laundry facilities"
                            ],
                            formControlName: "marginRight"
                          }),
                          Object(Qe.jsx)(Ht.a, {
                            label: "Parking Type",
                            name: "parkingType",
                            id: "parkingType",
                            type: "select",
                            classes: n,
                            component: Nn,
                            labelWidth: 41,
                            options: [
                              "",
                              "None",
                              "Surface lot",
                              "Covered",
                              "Street",
                              "Garage"
                            ],
                            formControlName: "flexStatic"
                          }),
                          Object(Qe.jsx)(Ht.a, {
                            label: "Parking Fee / Month",
                            name: "parkingFee",
                            id: "parkingFee",
                            type: "number",
                            min: 0,
                            step: 0.01,
                            classes: n,
                            component: In,
                            formControlName: "parking",
                            inputProps: { style: { paddingLeft: 20 } },
                            inputLabelProps: { style: { paddingLeft: 20 } },
                            startAdornment: "currency"
                          })
                        ]
                      }),
                      Object(Qe.jsx)(Vt.a, {
                        className: n.formLabel,
                        component: "legend",
                        children: "Features"
                      }),
                      Object(Qe.jsxs)(qt.a, {
                        row: !0,
                        classes: { root: n.formGroupFeatures },
                        children: [
                          Object(Qe.jsx)(Ht.a, {
                            label: "Vacant?",
                            name: "vacant",
                            id: "vacant",
                            type: "checkbox",
                            formControlName: "controlCheckbox",
                            classes: n,
                            component: An
                          }),
                          i
                        ]
                      }),
                      Object(Qe.jsx)(Vt.a, {
                        className: n.formLabel,
                        component: "legend",
                        children: "Additional information about this property"
                      }),
                      Object(Qe.jsx)(Ht.a, {
                        label: "Additional information about this property",
                        name: "notes",
                        id: "notes",
                        type: "textarea",
                        formControlName: "notes",
                        classes: n,
                        rows: 5,
                        component: Rn
                      }),
                      Object(Qe.jsx)("div", {
                        className: n.buttonWrap,
                        children: Object(Qe.jsx)(De.a, {
                          type: "submit",
                          color: "primary",
                          className: "".concat(n.next, " g-recaptcha"),
                          variant: "contained",
                          "data-sitekey":
                            "6LdzULcUAAAAAJ37JEr5WQDpAj6dCcPUn1bIXq2O",
                          "data-callback": r,
                          children: a ? "Update Listing" : "Create Listing"
                        })
                      })
                    ]
                  })
                ]
              })
            })
          );
        }),
        Pn = Object(p.b)(function(e) {
          return {
            listing: e.listing,
            initialValues: e.listing.form,
            formValues: Object(Ft.a)("addListing")(e) || {},
            submitErrors: Object($t.a)("addListing")(e)
          };
        })(Un),
        Gn = Object(Ne.a)()(Pn),
        Fn = (function(e) {
          Object(h.a)(n, e);
          var t = Object(g.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e)).state = { open: !1 }),
              (a.handleOpen = a.handleOpen.bind(Object(Te.a)(a))),
              (a.handleClose = a.handleClose.bind(Object(Te.a)(a))),
              (a.verifyRecaptchaScore = a.verifyRecaptchaScore.bind(
                Object(Te.a)(a)
              )),
              (a.handleSubmit = a.handleSubmit.bind(Object(Te.a)(a))),
              a
            );
          }
          return (
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  this.props.edit &&
                    this.props.match.params.id &&
                    this.props.apiListing
                      .getListingById(
                        this.props.match.params.id,
                        this.props.appState.userType
                      )
                      .then(function(t) {
                        ("GET_LISTING_BY_ID_FAILURE" === t.type ||
                          e.props.listing.error) &&
                          Ct(
                            "error",
                            e.props.listing.error ||
                              "An error occurred while trying to fetch your listing."
                          );
                      })
                      .catch(function(e) {
                        return Ct("error", e);
                      });
                }
              },
              {
                key: "handleOpen",
                value: function() {
                  var e = Object(d.a)({}, this.state);
                  (e.open = !0), this.setState(Object(d.a)({}, e));
                }
              },
              {
                key: "handleClose",
                value: function() {
                  var e = Object(d.a)({}, this.state);
                  (e.open = !1), this.setState(Object(d.a)({}, e));
                }
              },
              {
                key: "verifyRecaptchaScore",
                value: (function() {
                  var e = Object(Gt.a)(
                    Pt.a.mark(function e() {
                      var t, n;
                      return Pt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.props.recaptcha.execute()
                                );
                              case 2:
                                if (
                                  ((t = this.props.listing.form.reCaptchaValue),
                                  Object(Gt.a)(
                                    Pt.a.mark(function e() {
                                      return Pt.a.wrap(function(e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (t) {
                                                e.next = 5;
                                                break;
                                              }
                                              return (
                                                (e.next = 3),
                                                new Promise(function(e) {
                                                  return setTimeout(e, 200);
                                                })
                                              );
                                            case 3:
                                              e.next = 0;
                                              break;
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  )(),
                                  !t)
                                ) {
                                  e.next = 10;
                                  break;
                                }
                                return (
                                  (e.next = 7),
                                  this.props.apiListing
                                    .verify(t)
                                    .catch(function(e) {
                                      return (
                                        console.error(e),
                                        fn(
                                          "ReCaptcha verification failed, please reload the page and try again."
                                        )
                                      );
                                    })
                                );
                              case 7:
                                if (!(n = e.sent)) {
                                  e.next = 10;
                                  break;
                                }
                                return e.abrupt("return", n.payload.score);
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "generateListingBody",
                value: (function() {
                  var e = Object(Gt.a)(
                    Pt.a.mark(function e() {
                      var t, n, a, o, r;
                      return Pt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.props.formValues),
                                  (n = new Date()),
                                  t.mm &&
                                    t.dd &&
                                    t.yyyy &&
                                    ((i = t.mm),
                                    (s = t.dd),
                                    (c = t.yyyy),
                                    (n = new Date(
                                      ""
                                        .concat(i, "/")
                                        .concat(s, "/")
                                        .concat(c)
                                    ))),
                                  (a = On(t)),
                                  (o = window.localStorage.getItem("userId")),
                                  (r = {
                                    property_name: t.propertyName,
                                    property_street: t.propertyStreet,
                                    property_city: t.propertyCity,
                                    property_state: t.propertyState,
                                    property_zip: t.propertyZip,
                                    property_quadrant: t.quadrant,
                                    property_county: t.propertyCounty,
                                    property_phone: t.propertyPhone,
                                    property_email: t.propertyEmail,
                                    listing_url: t.listingUrl,
                                    vacant: t.vacant || !1,
                                    available_date: n,
                                    monthly_rent: t.monthlyRent,
                                    primary_image: t.primaryImage,
                                    deposit: t.deposit,
                                    bedrooms: t.bedrooms,
                                    lease_length: t.leaseLength,
                                    square_feet: t.squareFt,
                                    laundry_type: t.laundryType,
                                    parking_type: t.parkingType,
                                    parking_fee: t.parkingFee,
                                    features: a,
                                    user_id: o
                                  }),
                                  console.log(r),
                                  e.abrupt("return", r)
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                          var i, s, c;
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "addListing",
                value: (function() {
                  var e = Object(Gt.a)(
                    Pt.a.mark(function e() {
                      var t, n, a;
                      return Pt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  console.log("addListing"),
                                  (t = this.props.appState.authToken),
                                  console.log(t),
                                  (e.next = 5),
                                  this.generateListingBody()
                                );
                              case 5:
                                if (((n = e.sent), !t || !n)) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (e.next = 9),
                                  this.props.apiListing
                                    .addListing(t, n)
                                    .catch(function(e) {
                                      return console.error(e), fn(e);
                                    })
                                );
                              case 9:
                                if (
                                  ((a = e.sent),
                                  console.log(a.type),
                                  !(
                                    (a && "ADD_LISTING_SUCCESS" !== a.type) ||
                                    this.props.listing.error
                                  ))
                                ) {
                                  e.next = 16;
                                  break;
                                }
                                return (
                                  console.log(this.props.listing.error),
                                  e.abrupt(
                                    "return",
                                    fn(this.props.listing.error)
                                  )
                                );
                              case 16:
                                return e.abrupt("return", a.type);
                              case 17:
                                e.next = 20;
                                break;
                              case 19:
                                console.log("no listing body or no token");
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "updateListing",
                value: (function() {
                  var e = Object(Gt.a)(
                    Pt.a.mark(function e() {
                      var t, n, a, o;
                      return Pt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  console.log("updateListing"),
                                  (t = this.props.appState.authToken),
                                  console.log(t),
                                  (e.next = 5),
                                  this.generateListingBody()
                                );
                              case 5:
                                if (
                                  ((n = e.sent),
                                  console.log(n),
                                  (a = this.props.match.params.id),
                                  !(t && a && n))
                                ) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.next = 11),
                                  this.props.apiListing
                                    .updateListing(t, a, n)
                                    .catch(function(e) {
                                      return console.error(e), fn(e);
                                    })
                                );
                              case 11:
                                if (
                                  ((o = e.sent),
                                  console.log(o.type),
                                  !(
                                    (o &&
                                      "UPDATE_LISTING_SUCCESS" !== o.type) ||
                                    this.props.listing.error
                                  ))
                                ) {
                                  e.next = 18;
                                  break;
                                }
                                return (
                                  console.log(this.props.listing.error),
                                  e.abrupt(
                                    "return",
                                    fn(this.props.listing.error)
                                  )
                                );
                              case 18:
                                return e.abrupt("return", o.type);
                              case 19:
                                e.next = 23;
                                break;
                              case 21:
                                return (
                                  console.log(
                                    "no listing body or no token or no id"
                                  ),
                                  e.abrupt(
                                    "return",
                                    "no listing body or no token or no id"
                                  )
                                );
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "handleSubmit",
                value: (function() {
                  var e = Object(Gt.a)(
                    Pt.a.mark(function e() {
                      var t = this;
                      return Pt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                console.log("handleSubmit"),
                                  console.log(this.props.edit),
                                  this.props.edit
                                    ? this.updateListing()
                                        .then(function(e) {
                                          "UPDATE_LISTING_SUCCESS" === e
                                            ? (Ct("success", "Listing updated"),
                                              t.props.history.push("/listings"))
                                            : console.log(e);
                                        })
                                        .catch(function(e) {
                                          console.error(e);
                                        })
                                    : this.addListing()
                                        .then(function(e) {
                                          "ADD_LISTING_SUCCESS" === e
                                            ? (Ct("success", "Listing created"),
                                              t.props.history.push("/listings"))
                                            : console.log(e);
                                        })
                                        .catch(function(e) {
                                          console.error(e);
                                        });
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  return Object(Qe.jsx)("div", {
                    "data-test": "container-add-listing",
                    children: Object(Qe.jsx)(
                      Gn,
                      Object(d.a)(
                        Object(d.a)({}, this.props),
                        {},
                        {
                          onSubmit: this.handleSubmit,
                          handleError: fn,
                          verifyRecaptchaScore: this.verifyRecaptchaScore
                        }
                      )
                    )
                  });
                }
              }
            ]),
            n
          );
        })(s.a.Component),
        Bn = Object(p.b)(
          function(e) {
            return {
              listing: e.listing,
              appState: e.appState,
              profile: e.profile,
              initialValues: e.listing.form,
              formValues: Object(Ft.a)("addListing")(e) || {},
              pristine: Object(Bt.a)("addListing")(e),
              submitting: Object(Wt.a)("addListing")(e),
              valid: Object(zt.a)("addListing")(e),
              submitErrors: Object($t.a)("addListing")(e),
              reset: Mt.a
            };
          },
          function(e) {
            return {
              apiListing: Object(y.b)(r, e),
              apiProfile: Object(y.b)(o, e),
              actions: Object(y.b)(a, e),
              submitForm: function() {
                return e(Object(Mt.b)("addListing"));
              }
            };
          }
        )(Fn),
        Wn = Object(x.a)(yn)(Bn),
        zn = n(508),
        $n = n(230),
        Mn = n.n($n),
        Hn = n(229),
        Zn = n.n(Hn),
        Vn = n(227),
        qn = n.n(Vn),
        Qn = n(228),
        Yn = n.n(Qn),
        Jn = n.p + "static/media/apartment.1814d438.png",
        Kn = Object(x.a)(function(e) {
          return {
            root: { margin: 20, padding: 20, maxWidth: 1200 },
            tile: { border: "1px solid theme.palette.primary.main" },
            button: Object(b.a)(
              { margin: 8, flex: "0 0 auto" },
              e.breakpoints.down("sm"),
              { position: "absolute", right: 7, top: 20, flex: "1 1 auto" }
            ),
            cardListing: { display: "flex", flexDirection: "column" },
            cardListingSmall: {
              display: "flex",
              flexDirection: "column",
              padding: "5px 0px 0px 0px",
              border: "1px solid theme.palette.primary.main"
            },
            deleteButton: {
              position: "absolute",
              top: 20,
              right: 20,
              visibility: "hidden",
              zIndex: 2
            },
            contentBold: { fontWeight: 700 },
            contentLight: { fontWeight: 100 },
            contentRegular: { fontWeight: 400 },
            title: {
              fontSize: 36,
              fontWeight: 100,
              marginTop: 20,
              textTransform: "capitalize",
              lineHeight: "1em"
            },
            titleSmall: {
              backgroundColor: e.palette.primary.main,
              color: "white",
              margin: "-5px -10px 5px -10px",
              padding: "10px 20px 15px",
              textAlign: "center",
              borderRadius: "4px 4px 0 0",
              fontSize: "1.5em"
            },
            body: { fontSize: "1.1em", fontWeight: 100, marginTop: 10 },
            spinner: {
              position: "absolute",
              left: "calc(50% - 10px)",
              top: "calc(50% - 10px)"
            },
            tag: {
              padding: "3px 5px",
              margin: 5,
              border: "1px solid ".concat(e.palette.primary.main),
              textTransform: "capitalize",
              fontWeight: 100
            },
            tagText: { display: "inline", color: e.palette.secondary.main },
            tags: {
              margin: "20px -5px 10px",
              display: "flex",
              flexWrap: "wrap"
            },
            cardAction: { textDecoration: "none" },
            cardImage: {
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              filter: "contrast(70%)",
              overflow: "hidden",
              position: "relative",
              height: 200,
              transition: "filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91)",
              margin: "-20px -20px 20px -20px",
              "&::before": Object(b.a)(
                { content: '""', paddingTop: "66.6%", display: "block" },
                e.breakpoints.down("md"),
                { paddingTop: "56.25%" }
              ),
              "&:hover": { filter: "contrast(100%)" }
            },
            cardImageSmall: {
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              filter: "contrast(70%)",
              overflow: "hidden",
              position: "relative",
              height: 150,
              transition: "filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91)",
              margin: "-10px -10px 10px -10px",
              "&::before": Object(b.a)(
                { content: '""', paddingTop: "66.6%", display: "block" },
                e.breakpoints.down("md"),
                { paddingTop: "56.25%" }
              ),
              "&:hover": { filter: "contrast(100%)" }
            },
            cardRow: {
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              padding: "5px 10px 10px 10px"
            },
            cardFooter: {
              display: "flex",
              justifyContent: "space-between",
              padding: "5px 0px 0px 0px",
              margin: "0px -10px -5px -10px"
            },
            cardFooterSmall: {
              display: "flex",
              flexDirection: "column",
              padding: "5px 0px 0px 0px",
              margin: "0px -10px -5px -10px"
            },
            cardPhone: {
              border: e.palette.secondary.main,
              display: "flex",
              padding: "10px 20px",
              color: e.palette.primary.main,
              borderTop: "1px solid ".concat(e.palette.primary.main),
              width: "100%"
            },
            cardPhoneSmall: {
              border: e.palette.secondary.main,
              display: "flex",
              padding: 10,
              justifyContent: "center",
              color: e.palette.primary.main,
              borderTop: "1px solid ".concat(e.palette.primary.main),
              width: "100%"
            },
            cardEmail: {
              background: e.palette.secondary.main,
              color: "white",
              display: "flex",
              justifyContent: "center",
              padding: 10,
              minWidth: "40%",
              borderRadius: "0px 0px 4px 0px"
            },
            emailLink: {
              color: "white",
              textTransform: "uppercase",
              letterSpacing: 1,
              textDecoration: "none",
              "&:hover": { color: "white" },
              "&:visited": { color: "white" }
            },
            phoneLink: {
              color: e.palette.primary.main,
              textDecoration: "none",
              "&:hover": { color: e.palette.primary.main },
              "&:visited": { color: e.palette.primary.main }
            },
            icon: { marginRight: 15 }
          };
        })(function(e) {
          var t = e.classes,
            n = e.listingTile,
            a = e.small,
            o = n.primary_image,
            r = n.property_name,
            i = n.studio_l,
            s = n.studio_h,
            c = n.br1_l,
            l = n.br1_h,
            p = n.br2_l,
            d = n.br2_h,
            u = n.br3_l,
            m = n.br3_h,
            h = n.br4_l,
            g = n.br4_h,
            b = n.br5_l,
            f = n.br5_h,
            y = n.property_email,
            j = n.property_phone,
            x = n.listing_url,
            O = n.notes,
            S = Ve(i, s, c, l, p, d, u, m, h, g, b, f),
            v = { backgroundImage: "url(".concat(o || Jn, ")") };
          return Object(Qe.jsxs)("div", {
            "data-test": "component-listing-tile",
            className: t.tile,
            children: [
              Object(Qe.jsxs)("a", {
                href: x,
                rel: "noopener noreferrer",
                target: "_blank",
                className: t.cardAction,
                children: [
                  Object(Qe.jsx)(Ae.a, {
                    component: "h2",
                    className: a ? t.titleSmall : t.title,
                    "data-test": "title",
                    children: r
                  }),
                  Object(Qe.jsx)("div", {
                    className: a ? t.cardImageSmall : t.cardImage,
                    style: v,
                    "data-test": "image"
                  })
                ]
              }),
              Object(Qe.jsxs)("div", {
                className: a ? t.cardListingSmall : t.cardListing,
                "data-test": "card-listing",
                children: [
                  Object(Qe.jsx)("div", {
                    className: t.cardRow,
                    children: Object(Qe.jsx)(Ae.a, {
                      style: { whiteSpace: "pre-line" },
                      component: "p",
                      className: a ? t.contentLight : t.bodyLight,
                      "data-test": "body",
                      children: S
                    })
                  }),
                  Object(Qe.jsx)("div", {
                    className: t.cardRow,
                    children: Object(Qe.jsx)(Ae.a, {
                      component: "p",
                      className: a ? t.contentLight : t.bodyLight,
                      "data-test": "body2",
                      children: O
                    })
                  }),
                  Object(Qe.jsxs)("div", {
                    className: a ? t.cardFooterSmall : t.cardFooter,
                    children: [
                      Object(Qe.jsx)("a", {
                        href: "tel:".concat(j),
                        className: t.phoneLink,
                        children: Object(Qe.jsxs)("div", {
                          className: a ? t.cardPhoneSmall : t.cardPhone,
                          children: [
                            Object(Qe.jsx)(qn.a, { className: t.icon }),
                            Object(Qe.jsx)(Ae.a, {
                              component: "span",
                              className: a ? t.contentBold : t.body,
                              "data-test": "body",
                              children: j
                            })
                          ]
                        })
                      }),
                      Object(Qe.jsx)("a", {
                        href: "mailto:".concat(y),
                        className: t.emailLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: Object(Qe.jsxs)("div", {
                          className: t.cardEmail,
                          children: [
                            Object(Qe.jsx)(Yn.a, { className: t.icon }),
                            Object(Qe.jsx)(Ae.a, {
                              component: "span",
                              className: a ? t.contentBold : t.body,
                              "data-test": "body",
                              children: "Email"
                            })
                          ]
                        })
                      })
                    ]
                  })
                ]
              })
            ]
          });
        }),
        Xn = n(502),
        ea = {
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          backgroundColor: "rgba(0,0,0,.4)"
        },
        ta = { position: "relative", top: "44%" },
        na = function(e) {
          return Object(Qe.jsx)("div", {
            style: ea,
            children: Object(Qe.jsx)(Xn.a, {
              style: ta,
              color: "primary",
              size: 50,
              "data-test": "component-spinner"
            })
          });
        },
        aa = n(503),
        oa = n(507),
        ra = n(504),
        ia = n(505),
        sa = n(506),
        ca = Object(x.a)(function(e) {
          return {
            root: { margin: 0, padding: 20 },
            danger: {
              backgroundColor: e.palette.danger.main,
              color: "white",
              "&:hover": { backgroundColor: e.palette.danger.light }
            },
            primary: { backgroundColor: e.palette.primary.main }
          };
        })(function(e) {
          return Object(Qe.jsx)("div", {
            "data-test": "component-alert-dialog",
            children: Object(Qe.jsxs)(aa.a, {
              "data-test": "dialog",
              open: e.open,
              onClose: e.handleClose,
              "aria-labelledby": e.title
                ? "alert-dialog-title"
                : "alert-dialog-description",
              "aria-describedby": "alert-dialog-description",
              PaperProps: { style: { margin: 0 } },
              children: [
                e.title &&
                  Object(Qe.jsx)(ra.a, {
                    id: "alert-dialog-title",
                    "data-test": "dialog-title",
                    children: e.title
                  }),
                Object(Qe.jsx)(ia.a, {
                  children: Object(Qe.jsx)(sa.a, {
                    id: "alert-dialog-description",
                    "data-test": "dialog-listing",
                    children: e.listing
                  })
                }),
                Object(Qe.jsxs)(oa.a, {
                  children: [
                    Object(Qe.jsx)(De.a, {
                      onClick: e.handleClose,
                      variant: "outlined",
                      color: "default",
                      "data-test": "button-cancel",
                      children: "Cancel"
                    }),
                    Object(Qe.jsx)(De.a, {
                      onClick: e.action,
                      className: e.danger
                        ? e.classes.danger
                        : e.classes.primary,
                      variant: "contained",
                      autoFocus: !0,
                      "data-test": "button-action",
                      children: e.buttonText
                    })
                  ]
                })
              ]
            })
          });
        }),
        la = (function(e) {
          Object(h.a)(n, e);
          var t = Object(g.a)(n);
          function n() {
            var e;
            Object(u.a)(this, n);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((e = t.call.apply(
                t,
                [this].concat(o)
              )).handleDeleteDialogOpen = function(t) {
                t &&
                  e.props.appState.loggedIn &&
                  e.props.apiListing.handleDeleteOpen(t);
              }),
              e
            );
          }
          return (
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this,
                    t = this.props.appState,
                    n = t.authToken,
                    a = t.userId;
                  console.log(
                    "loggedIn: ".concat(this.props.appState.loggedIn)
                  ),
                    console.log(!!n, a),
                    n &&
                      a &&
                      this.props.apiListing
                        .getUserListings(n, a)
                        .then(function(t) {
                          console.log(t.payload),
                            ("GET_USER_LISTINGS_FAILURE" === t.type ||
                              e.props.listing.error) &&
                              Ct(
                                "error",
                                e.props.listing.error ||
                                  "An error occured while fetching listing"
                              );
                        })
                        .catch(function(e) {
                          Ct("error", e);
                        });
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e, t, n) {
                  var a = this;
                  console.log("content library cDU");
                  var o = this.props.appState,
                    r = o.authToken,
                    i = o.userId;
                  console.log(!!r, i),
                    ((!e.appState.authToken && r) ||
                      (!e.appState.userId && i)) &&
                      r &&
                      i &&
                      this.props.apiListing
                        .getUserListings(r, i)
                        .then(function(e) {
                          console.log(e),
                            ("GET_USER_LISTINGS_FAILURE" === e.type ||
                              a.props.listing.error) &&
                              Ct(
                                "error",
                                a.props.listing.error ||
                                  "An error occured while fetching listings"
                              );
                        })
                        .catch(function(e) {
                          Ct("error", e);
                        });
                }
              },
              {
                key: "deleteListing",
                value: (function() {
                  var e = Object(Gt.a)(
                    Pt.a.mark(function e(t) {
                      var n, a, o, r;
                      return Pt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = this.props.appState.authToken),
                                  (e.next = 3),
                                  this.props.apiListing.deleteListing(n, t.id)
                                );
                              case 3:
                                if (
                                  (a = e.sent).type &&
                                  "DELETE_LISTING_SUCCESS" === a.type
                                ) {
                                  e.next = 8;
                                  break;
                                }
                                Ct("error", this.props.listing.error),
                                  (e.next = 18);
                                break;
                              case 8:
                                if (
                                  "DELETE_LISTING_SUCCESS" !== a.type ||
                                  "image" !== t.listing_type
                                ) {
                                  e.next = 17;
                                  break;
                                }
                                return (
                                  (o = t.listing.split("/")),
                                  (r = o[o.length - 1]),
                                  (e.next = 13),
                                  this.props.apiListing.deleteImage(n, r)
                                );
                              case 13:
                                "DELETE_IMAGE_SUCCESS" === e.sent.type &&
                                  (Ct(
                                    "success",
                                    "Deleted ".concat(t.listing_type, ".")
                                  ),
                                  this.props.apiListing.getAllListing(n)),
                                  (e.next = 18);
                                break;
                              case 17:
                                "DELETE_LISTING_SUCCESS" === a.type &&
                                  (Ct(
                                    "success",
                                    "Deleted ".concat(t.listing_type, ".")
                                  ),
                                  this.props.apiListing.getAllListing(n));
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.classes;
                  return Object(Qe.jsxs)("div", {
                    "data-test": "component-listing-library",
                    className: t.root,
                    children: [
                      this.props.appState.loading && Object(Qe.jsx)(na, {}),
                      this.props.listing.deleteDialogOpen &&
                        Object(Qe.jsx)(ca, {
                          open: this.props.listing.deleteDialogOpen,
                          handleClose: this.props.apiListing.handleDeleteClose,
                          title: "Delete Listing",
                          listing:
                            "Are you sure you want to delete this listing?",
                          danger: !0,
                          action: function() {
                            e.deleteListing(e.props.listing.currentListing),
                              e.props.apiListing.handleDeleteClose();
                          },
                          buttonText: "Delete",
                          "data-test": "alert-dialog"
                        }),
                      Object(Qe.jsxs)("div", {
                        className: t.section,
                        children: [
                          Object(Qe.jsx)(Ae.a, {
                            variant: "h2",
                            align: "center",
                            gutterBottom: !0,
                            className: t.head,
                            style: { paddingTop: 20 },
                            "data-test": "headline",
                            children: "My Listings"
                          }),
                          Object(Qe.jsx)("div", {
                            className: t.gridWrapper,
                            children: this.props.listing.userListings.map(
                              function(n) {
                                return Object(Qe.jsxs)(
                                  "div",
                                  {
                                    className: t.card,
                                    "data-test": "tile",
                                    children: [
                                      Object(Qe.jsxs)("div", {
                                        className: t.actionArea,
                                        children: [
                                          Object(Qe.jsx)(zn.a, {
                                            className: t.buttonDelete,
                                            onClick: function() {
                                              return e.handleDeleteDialogOpen(
                                                n
                                              );
                                            },
                                            color: "primary",
                                            "aria-label": "Delete Listing",
                                            "data-test": "delete",
                                            children: Object(Qe.jsx)(Zn.a, {})
                                          }),
                                          Object(Qe.jsx)(zn.a, {
                                            className: t.buttonEdit,
                                            onClick: function() {
                                              return e.props.history.push(
                                                "/edit/".concat(n.id)
                                              );
                                            },
                                            color: "primary",
                                            "aria-label": "Edit Listing",
                                            "data-test": "edit",
                                            children: Object(Qe.jsx)(Mn.a, {})
                                          })
                                        ]
                                      }),
                                      Object(Qe.jsx)(Kn, {
                                        listingTile: n,
                                        small: !0
                                      })
                                    ]
                                  },
                                  n.id
                                );
                              }
                            )
                          })
                        ]
                      })
                    ]
                  });
                }
              }
            ]),
            n
          );
        })(s.a.Component),
        pa = Object(p.b)(
          function(e) {
            return {
              appState: e.appState,
              profile: e.profile,
              listing: e.listing
            };
          },
          function(e) {
            return { apiListing: Object(y.b)(r, e) };
          }
        )(la),
        da = Object(f.f)(
          Object(x.a)(function(e) {
            var t;
            return {
              root: {
                margin: "0 auto",
                width: "100%",
                maxWidth: 1920,
                paddingBottom: 60,
                background: "white",
                minHeight: "100vh"
              },
              section: { padding: "60px 0 0 0" },
              head: { color: e.palette.primary.main },
              buttonEdit: {
                position: "absolute",
                bottom: 20,
                right: 20,
                visibility: "hidden",
                "&:hover": { backgroundColor: e.palette.primary.light }
              },
              buttonDelete: {
                position: "absolute",
                bottom: 20,
                right: 80,
                visibility: "hidden",
                backgroundColor: e.palette.danger.main,
                "&:hover": { backgroundColor: e.palette.danger.light }
              },
              actionArea: {
                borderRadius: 6,
                zIndex: 1,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                cursor: "pointer",
                "&:hover": { backgroundColor: "rgba(0,0,0,.05)" },
                "&:hover $buttonEdit": { visibility: "visible" },
                "&:hover $buttonDelete": { visibility: "visible" }
              },
              gridWrapper: Object(b.a)(
                {
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  padding: "50px 0"
                },
                e.breakpoints.down("sm"),
                { padding: "10px 0px" }
              ),
              card:
                ((t = {
                  width: "31%",
                  padding: "5px 10px",
                  borderRadius: 4,
                  margin: "10px",
                  position: "relative",
                  border: "1px solid ".concat(e.palette.primary.main)
                }),
                Object(b.a)(t, e.breakpoints.down("md"), { width: "47%" }),
                Object(b.a)(t, e.breakpoints.down("sm"), {
                  width: "100%",
                  margin: "10px 0px"
                }),
                t)
            };
          })(pa)
        ),
        ua = kn,
        ma = wn,
        ha = Object(Zt.a)({
          form: "updateUser",
          validate: function(e) {
            var t = {};
            return (
              [
                "name",
                "email",
                "phone",
                "companyName",
                "companyStreet",
                "companyZip",
                "companyState",
                "companyCity"
              ].forEach(function(n) {
                e[n] || (t[n] = "Required");
              }),
              e.email &&
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email) &&
                (t.email = "Invalid email address (e.g. sample@email.com)"),
              e.phone &&
                !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
                  e.phone
                ) &&
                (t.phone = "Invalid phone number (e.g. 555-123-4567)"),
              e.companyZip &&
                5 !== e.companyZip.length &&
                (t.companyZip = "Must be at exactly 5 characters long"),
              t
            );
          },
          destroyOnUnmount: !0,
          forceUnregisterOnUnmount: !0,
          enableReinitialize: !0,
          keepDirtyOnReinitialize: !0,
          updateUnregisteredFields: !0,
          onSubmitFail: Ze
        })(function(e) {
          var t = e.onSubmit,
            n = e.classes,
            a = e.width,
            o = e.verifyCallback;
          return Object(Qe.jsx)("div", {
            "data-test": "component-update-user",
            className: n.sectionContainer,
            children: Object(Qe.jsxs)("form", {
              onSubmit: e.handleSubmit(t),
              id: "updateUser",
              className: n.form,
              children: [
                Object(Qe.jsx)(Ae.a, {
                  className: n.formTitle,
                  variant: "h3",
                  children: "Property Manager Account Information"
                }),
                Object(Qe.jsxs)("div", {
                  className: n.formSection,
                  children: [
                    Object(Qe.jsx)(Ht.a, {
                      label: "Your Name",
                      name: "name",
                      id: "name",
                      type: "text",
                      classes: n,
                      component: ma
                    }),
                    Object(Qe.jsx)(Ht.a, {
                      label: "Email",
                      name: "email",
                      id: "email",
                      type: "email",
                      classes: n,
                      component: ma
                    }),
                    Object(Qe.jsx)(Ht.a, {
                      label: "Phone",
                      name: "phone",
                      id: "phone",
                      type: "tel",
                      classes: n,
                      component: ma
                    }),
                    Object(Qe.jsx)(Ht.a, {
                      label: "Company Name",
                      name: "companyName",
                      id: "companyName",
                      type: "text",
                      classes: n,
                      component: ma
                    }),
                    Object(Qe.jsx)(Vt.a, {
                      className: n.formLabel,
                      component: "legend",
                      children: "Company Address"
                    }),
                    Object(Qe.jsx)(Ht.a, {
                      label: "Street Address or PO Box",
                      name: "companyStreet",
                      id: "companyStreet",
                      type: "text",
                      classes: n,
                      component: ma
                    }),
                    Object(Qe.jsxs)(qt.a, {
                      className: n.formGroup,
                      row: !0,
                      classes: { root: n.formGroup2Col },
                      children: [
                        Object(Qe.jsx)(Ht.a, {
                          label: "City",
                          name: "companyCity",
                          id: "companyCity",
                          type: "text",
                          twocol: !0,
                          mobile: !Object(Ne.b)("sm", a),
                          classes: n,
                          component: ma
                        }),
                        Object(Qe.jsx)(Ht.a, {
                          label: "State",
                          name: "companyState",
                          id: "companyState",
                          type: "select",
                          short: !0,
                          mobile: !Object(Ne.b)("sm", a),
                          classes: n,
                          component: ua,
                          options: ["", "OR", "WA"],
                          labelWidth: 80
                        }),
                        Object(Qe.jsx)(Ht.a, {
                          label: "Zip",
                          name: "companyZip",
                          id: "companyZip",
                          short: !0,
                          mobile: !Object(Ne.b)("sm", a),
                          type: "text",
                          classes: n,
                          component: ma
                        })
                      ]
                    }),
                    Object(Qe.jsx)("div", {
                      className: n.buttonWrap,
                      children: Object(Qe.jsx)(De.a, {
                        type: "submit",
                        color: "primary",
                        className: "".concat(n.next, " g-recaptcha"),
                        variant: "contained",
                        "data-sitekey":
                          "6LdzULcUAAAAAJ37JEr5WQDpAj6dCcPUn1bIXq2O",
                        "data-callback": o,
                        children: "Update User"
                      })
                    })
                  ]
                })
              ]
            })
          });
        }),
        ga = Object(p.b)(function(e) {
          return {
            profile: e.profile,
            initialValues: e.profile.profile,
            formValues: Object(Ft.a)("updateUser")(e) || {},
            submitErrors: Object($t.a)("updateUser")(e)
          };
        })(ha),
        ba = Object(Ne.a)()(ga),
        fa = (function(e) {
          Object(h.a)(n, e);
          var t = Object(g.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e)).state = { open: !1 }),
              (a.handleOpen = a.handleOpen.bind(Object(Te.a)(a))),
              (a.handleClose = a.handleClose.bind(Object(Te.a)(a))),
              (a.verifyRecaptchaScore = a.verifyRecaptchaScore.bind(
                Object(Te.a)(a)
              )),
              (a.handleSubmit = a.handleSubmit.bind(Object(Te.a)(a))),
              a
            );
          }
          return (
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  this.getUserProfile();
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e, t, n) {
                  ((!e.appState.authToken && this.props.appState.authToken) ||
                    (!e.appState.userId && this.props.appState.userId)) &&
                    this.getUserProfile();
                }
              },
              {
                key: "getUserProfile",
                value: function() {
                  var e = this,
                    t = this.props.appState.authToken,
                    n = this.props.match.params.id;
                  t && n
                    ? this.props.apiProfile
                        .getProfile(t, n)
                        .then(function(t) {
                          "GET_PROFILE_FAILURE" === t.type ||
                          e.props.profile.error
                            ? Ct(
                                "error",
                                e.props.profile.error ||
                                  "An error occurred while trying to fetch your profile."
                              )
                            : console.log(e.props.profile.profile);
                        })
                        .catch(function(e) {
                          return Ct("error", e);
                        })
                    : console.log("missing token or id");
                }
              },
              {
                key: "handleOpen",
                value: function() {
                  var e = Object(d.a)({}, this.state);
                  (e.open = !0), this.setState(Object(d.a)({}, e));
                }
              },
              {
                key: "handleClose",
                value: function() {
                  var e = Object(d.a)({}, this.state);
                  (e.open = !1), this.setState(Object(d.a)({}, e));
                }
              },
              {
                key: "verifyRecaptchaScore",
                value: (function() {
                  var e = Object(Gt.a)(
                    Pt.a.mark(function e() {
                      var t, n;
                      return Pt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2), this.props.recaptcha.execute()
                                );
                              case 2:
                                if (
                                  ((t = this.props.listing.form.reCaptchaValue),
                                  Object(Gt.a)(
                                    Pt.a.mark(function e() {
                                      return Pt.a.wrap(function(e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (t) {
                                                e.next = 5;
                                                break;
                                              }
                                              return (
                                                (e.next = 3),
                                                new Promise(function(e) {
                                                  return setTimeout(e, 200);
                                                })
                                              );
                                            case 3:
                                              e.next = 0;
                                              break;
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  )(),
                                  !t)
                                ) {
                                  e.next = 10;
                                  break;
                                }
                                return (
                                  (e.next = 7),
                                  this.props.apiListing
                                    .verify(t)
                                    .catch(function(e) {
                                      return (
                                        console.error(e),
                                        fn(
                                          "ReCaptcha verification failed, please reload the page and try again."
                                        )
                                      );
                                    })
                                );
                              case 7:
                                if (!(n = e.sent)) {
                                  e.next = 10;
                                  break;
                                }
                                return e.abrupt("return", n.payload.score);
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "generateUserBody",
                value: (function() {
                  var e = Object(Gt.a)(
                    Pt.a.mark(function e() {
                      var t, n;
                      return Pt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.props.formValues),
                                  "manager",
                                  (n = {
                                    name: t.name,
                                    email: t.email,
                                    phone: t.phone,
                                    company_name: t.companyName,
                                    company_street: t.companyStreet,
                                    company_city: t.companyCity,
                                    company_state: t.companyState,
                                    company_zip: t.companyZip,
                                    user_type: "manager"
                                  }),
                                  console.log(n),
                                  e.abrupt("return", n)
                                );
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "updateProfile",
                value: (function() {
                  var e = Object(Gt.a)(
                    Pt.a.mark(function e() {
                      var t, n, a, o;
                      return Pt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  console.log("updateProfile"),
                                  (t = this.props.appState.authToken),
                                  console.log(t),
                                  (e.next = 5),
                                  this.generateUserBody()
                                );
                              case 5:
                                if (
                                  ((n = e.sent),
                                  console.log(n),
                                  (a = this.props.match.params.id),
                                  !(t && a && n))
                                ) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (e.next = 11),
                                  this.props.apiProfile
                                    .updateProfile(t, a, n)
                                    .catch(function(e) {
                                      return console.error(e), fn(e);
                                    })
                                );
                              case 11:
                                if (
                                  ((o = e.sent),
                                  console.log(o.type),
                                  !(
                                    (o &&
                                      "UPDATE_PROFILE_SUCCESS" !== o.type) ||
                                    this.props.profile.error
                                  ))
                                ) {
                                  e.next = 18;
                                  break;
                                }
                                return (
                                  console.log(this.props.profile.error),
                                  e.abrupt(
                                    "return",
                                    fn(this.props.profile.error)
                                  )
                                );
                              case 18:
                                this.props.history.push("/admin");
                              case 19:
                                e.next = 23;
                                break;
                              case 21:
                                return (
                                  console.log(
                                    "no profile body or no token or no id"
                                  ),
                                  e.abrupt(
                                    "return",
                                    "no profile body or no token or no id"
                                  )
                                );
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "handleSubmit",
                value: (function() {
                  var e = Object(Gt.a)(
                    Pt.a.mark(function e() {
                      var t = this;
                      return Pt.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                console.log("handleSubmit"),
                                  this.updateProfile()
                                    .then(function(e) {
                                      "UPDATE_PROFILE_SUCCESS" === e
                                        ? (Ct("success", "Profile updated"),
                                          t.props.history.push("/new"))
                                        : console.log(e);
                                    })
                                    .catch(function(e) {
                                      console.error(e);
                                    });
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function() {
                    return e.apply(this, arguments);
                  };
                })()
              },
              {
                key: "render",
                value: function() {
                  return Object(Qe.jsx)("div", {
                    "data-test": "container-update-user",
                    children: Object(Qe.jsx)(
                      ba,
                      Object(d.a)(
                        Object(d.a)({}, this.props),
                        {},
                        {
                          onSubmit: this.handleSubmit,
                          handleError: fn,
                          verifyRecaptchaScore: this.verifyRecaptchaScore
                        }
                      )
                    )
                  });
                }
              }
            ]),
            n
          );
        })(s.a.Component),
        ya = Object(p.b)(
          function(e) {
            return {
              listing: e.listing,
              appState: e.appState,
              profile: e.profile,
              initialValues: e.profile.profile,
              formValues: Object(Ft.a)("updateUser")(e) || {},
              pristine: Object(Bt.a)("updateUser")(e),
              submitting: Object(Wt.a)("updateUser")(e),
              valid: Object(zt.a)("updateUser")(e),
              submitErrors: Object($t.a)("updateUser")(e),
              reset: Mt.a
            };
          },
          function(e) {
            return {
              apiListing: Object(y.b)(r, e),
              apiProfile: Object(y.b)(o, e),
              actions: Object(y.b)(a, e),
              submitForm: function() {
                return e(Object(Mt.b)("updateUser"));
              }
            };
          }
        )(fa),
        ja = Object(x.a)(yn)(ya),
        xa = n(231),
        Oa = n.n(xa),
        Sa = n(509),
        va = Ln,
        wa = jn,
        _a = Object(Zt.a)({
          form: "listingSearch",
          destroyOnUnmount: !1,
          forceUnregisterOnUnmount: !1,
          enableReinitialize: !0,
          keepDirtyOnReinitialize: !0,
          updateUnregisteredFields: !0
        })(function(e) {
          var t = e.classes,
            n = e.clearForm,
            a = e.setAndClose,
            o = e.more,
            r = e.toggleDrawer,
            i = Object.keys(wa).map(function(e) {
              return Object(Qe.jsx)(
                Ht.a,
                {
                  label: wa[e],
                  name: e,
                  id: e,
                  type: "checkbox",
                  formControlName: "controlCheckbox",
                  classes: t,
                  component: va
                },
                e
              );
            });
          return Object(Qe.jsx)(Sa.a, {
            className: t.drawer,
            "data-test": "component-features-search",
            variant: "permanent",
            classes: { paper: t.drawerPaper },
            open: o,
            onClose: r,
            anchor: "right",
            children: Object(Qe.jsxs)("div", {
              className: t.featuresPanel,
              children: [
                Object(Qe.jsx)("div", {
                  className: t.formSection,
                  children: Object(Qe.jsx)(Vt.a, {
                    className: t.formLabel,
                    component: "legend",
                    children: "Features"
                  })
                }),
                Object(Qe.jsxs)(qt.a, {
                  row: !0,
                  classes: { root: t.formGroupFeatures },
                  children: [
                    Object(Qe.jsx)(Ht.a, {
                      label: "Vacant?",
                      name: "vacant",
                      id: "vacant",
                      type: "checkbox",
                      formControlName: "controlCheckbox",
                      classes: t,
                      component: va
                    }),
                    i
                  ]
                }),
                Object(Qe.jsxs)("div", {
                  className: t.buttonWrap,
                  children: [
                    Object(Qe.jsx)(De.a, {
                      type: "button",
                      color: "secondary",
                      className: t.leftButton,
                      variant: "outlined",
                      onClick: n,
                      children: "Clear"
                    }),
                    Object(Qe.jsx)(De.a, {
                      type: "button",
                      color: "primary",
                      className: t.next,
                      variant: "contained",
                      onClick: a,
                      children: "Done"
                    })
                  ]
                })
              ]
            })
          });
        }),
        ka = Object(Ne.a)()(_a),
        La = kn,
        Ca = wn;
      var Ea = Object(Zt.a)({
          form: "listingSearch",
          destroyOnUnmount: !1,
          forceUnregisterOnUnmount: !1,
          enableReinitialize: !0,
          keepDirtyOnReinitialize: !0,
          updateUnregisteredFields: !0
        })(function(e) {
          var t = e.onSubmit,
            n = e.classes;
          return Object(Qe.jsx)("div", {
            className: n.searchBar,
            "data-test": "component-search-bar",
            children: Object(Qe.jsxs)("form", {
              className: n.searchForm,
              onSubmit: e.handleSubmit(t),
              id: "listingSearch",
              children: [
                Object(Qe.jsx)(Ue.a, {
                  "aria-label": "close",
                  className: n.closeButton,
                  size: "small",
                  onClick: e.hideSearch,
                  children: Object(Qe.jsx)(lt.a, { fontSize: "inherit" })
                }),
                Object(Qe.jsx)(Ht.a, {
                  label: "Zip code",
                  name: "searchZip",
                  id: "searchZip",
                  type: "text",
                  classes: n,
                  formControlName: "searchZip",
                  component: Ca
                }),
                Object(Qe.jsx)(Ht.a, {
                  "data-test": "input-bedrooms",
                  label: "Bedrooms",
                  name: "bedrooms",
                  id: "bedrooms",
                  type: "select",
                  options: ["", "Studio", "1", "2", "3", "4+"],
                  classes: n,
                  labelWidth: 41,
                  component: La,
                  formControlName: "searchBedrooms",
                  inputProps: { style: { paddingLeft: 20 } },
                  inputLabelProps: { style: { paddingLeft: 20 } }
                }),
                Object(Qe.jsx)(Ht.a, {
                  label: "Max Rent",
                  name: "maxRent",
                  id: "maxRent",
                  type: "number",
                  min: 0.01,
                  step: 0.01,
                  classes: n,
                  component: Ca,
                  formControlName: "maxRent",
                  inputProps: {
                    style: { paddingLeft: 15, textAlign: "right" }
                  },
                  inputLabelProps: { style: { paddingLeft: 15 } },
                  startAdornment: "currency"
                }),
                Object(Qe.jsx)(De.a, {
                  type: "button",
                  color: "secondary",
                  className: n.moreButton,
                  variant: "outlined",
                  onClick: e.toggleMore,
                  children: "More"
                }),
                Object(Qe.jsx)(De.a, {
                  type: "submit",
                  color: "primary",
                  className: n.searchButton,
                  variant: "contained",
                  onClick: e.search,
                  children: "Search"
                }),
                Object(Qe.jsx)(De.a, {
                  type: "button",
                  color: "secondary",
                  className: n.clearButton,
                  variant: "outlined",
                  onClick: e.clearSearch,
                  children: "Reset Filters"
                }),
                e.more &&
                  Object(Qe.jsx)(ka, {
                    classes: n,
                    setAndClose: e.setAndClose,
                    clearSearch: e.clearSearch,
                    more: e.more,
                    toggleDrawer: e.toggleDrawer
                  })
              ]
            })
          });
        }),
        Ta = Object(p.b)(function(e) {
          return {
            listing: e.listing,
            initialValues: e.listing.search,
            formValues: Object(Ft.a)("listingSearch")(e) || {},
            submitErrors: Object($t.a)("listingSearch")(e)
          };
        })(Ea),
        Na = Object(Ne.a)()(Ta),
        Ia = n(518),
        Ra = n(232),
        Aa = n.n(Ra),
        Da = function(e) {
          return Object(Qe.jsx)("div", {
            "data-test": "component-map-marker",
            className: e.classes.mapMarker,
            children: Object(Qe.jsx)(Ua, {
              title: Object(Qe.jsx)("div", {
                className: e.classes.markerCard,
                children: Object(Qe.jsx)(Kn, {
                  listingTile: e.listing,
                  small: !0
                })
              }),
              children: Object(Qe.jsx)(Aa.a, { className: e.classes.mapIcon })
            })
          });
        },
        Ua = Object(x.a)(function(e) {
          return {
            tooltip: {
              backgroundColor: "white",
              color: "rgba(0, 0, 0, 0.87)",
              fontSize: e.typography.pxToRem(12)
            }
          };
        })(function(e) {
          return Object(Qe.jsx)(Ia.a, Object(d.a)({ interactive: !0 }, e));
        }),
        Pa = (function(e) {
          Object(h.a)(n, e);
          var t = Object(g.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e)).getAllListings = function() {
                var e = a.props.appState.authToken;
                a.props.apiListing
                  .getAllListings(e)
                  .then(function(e) {
                    console.log("getAllListings:"),
                      console.log(e.payload),
                      ("GET_ALL_LISTINGS_FAILURE" === e.type ||
                        a.props.listing.error) &&
                        (console.log(
                          a.props.listing.error ||
                            "An error occured while fetching listings"
                        ),
                        Ct(
                          "error",
                          a.props.listing.error ||
                            "An error occured while fetching listings"
                        ));
                  })
                  .catch(function(e) {
                    Ct("error", e), console.log(e);
                  });
              }),
              (a.toggleMore = function() {
                console.log("toggleMore");
                var e = Object(d.a)({}, a.state);
                (e.more = !a.state.more), a.setState(Object(d.a)({}, e));
              }),
              (a.clearSearch = function() {
                console.log("clearSearch"),
                  a.props.apiListing.clearSearch(),
                  a.getAllListings();
              }),
              (a.clearFeatures = function() {
                console.log("clearFeatures"),
                  a.props.apiListing.clearFeatures();
              }),
              (a.setAndClose = function() {
                console.log("setAndClose"), a.toggleMore();
              }),
              (a.hideSearch = function() {
                console.log("hideSearch");
                var e = Object(d.a)({}, a.state);
                (e.search = !1), a.setState(Object(d.a)({}, e));
              }),
              (a.handleSubmit = function() {
                console.log("handleSubmit");
                var e = a.props.formValues,
                  t = {
                    features: On(e),
                    property_zip: e.searchZip,
                    bedrooms: e.bedrooms,
                    max_rent: e.maxRent
                  },
                  n = (function(e, t) {
                    console.log(e), console.log(t);
                    var n = Object(Qt.a)(e);
                    if (
                      (t.max_rent &&
                        (console.log(
                          "max_rent: ".concat(parseFloat(t.max_rent))
                        ),
                        (n = n.filter(function(e) {
                          return (
                            console.log(
                              "monthly_rent: ".concat(
                                parseFloat(e.monthly_rent)
                              )
                            ),
                            parseFloat(e.monthly_rent) <= parseFloat(t.max_rent)
                          );
                        }))),
                      console.log("filteredListings after maxRent filter", n),
                      !n.length)
                    )
                      return [];
                    if (
                      (t.bedrooms &&
                        (n = n.filter(function(e) {
                          return e.bedrooms === t.bedrooms;
                        })),
                      console.log("filteredListings after bedrooms filter", n),
                      !n.length)
                    )
                      return [];
                    if (
                      (t.property_zip &&
                        (n = n.filter(function(e) {
                          return e.property_zip === t.property_zip;
                        })),
                      console.log("filteredListings after zip filter", n),
                      !n.length)
                    )
                      return [];
                    if (t.features) {
                      var a = Object(Qt.a)(n);
                      n.forEach(function(e) {
                        t.features.forEach(function(t, n) {
                          e.features.includes(t) ||
                            (console.log(
                              ""
                                .concat(e.property_name, " doesn't match ")
                                .concat(t)
                            ),
                            a.splice(n, 1));
                        });
                      }),
                        (n = Object(Qt.a)(a));
                    }
                    return (
                      console.log("filteredListings after features filter", n),
                      n.length ? n : []
                    );
                  })(a.props.listing.allListings, t);
                console.log(n),
                  a.props.apiListing.updateFilter(n),
                  n.length ||
                    Ct(
                      "error",
                      "No listings match your search criteria. Try broadening your search."
                    );
              }),
              (a.state = { more: !1, search: !0 }),
              a
            );
          }
          return (
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  console.log("cDM"), this.getAllListings();
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.listing.filteredListings.map(function(t) {
                      return Object(Qe.jsx)(
                        Da,
                        {
                          listing: t,
                          lat: t.property_lat,
                          lng: t.property_lon,
                          classes: e.props.classes
                        },
                        t.id
                      );
                    });
                  return Object(Qe.jsxs)("div", {
                    className: this.props.classes.mapContainer,
                    style: { height: "100vh", width: "100%" },
                    children: [
                      this.state.search &&
                        Object(Qe.jsx)(Na, {
                          classes: this.props.classes,
                          toggleMore: this.toggleMore,
                          toggleDrawer: this.toggleMore,
                          listing: this.props.listing,
                          more: this.state.more,
                          setAndClose: this.setAndClose,
                          clearSearch: this.clearSearch,
                          onSubmit: this.handleSubmit,
                          hideSearch: this.hideSearch
                        }),
                      Object(Qe.jsx)(Oa.a, {
                        bootstrapURLKeys: {
                          key: "AIzaSyCzzv8kgYfdr9TIKQVG1Y6iexdL90rWYqg"
                        },
                        defaultCenter: this.props.center,
                        defaultZoom: this.props.zoom,
                        children: t
                      })
                    ]
                  });
                }
              }
            ]),
            n
          );
        })(i.Component);
      Pa.defaultProps = { center: { lat: 45.5051, lng: -122.675 }, zoom: 12 };
      var Ga = Object(p.b)(
          function(e) {
            return {
              appState: e.appState,
              profile: e.profile,
              listing: e.listing,
              formValues: Object(Ft.a)("listingSearch")(e) || {}
            };
          },
          function(e) {
            return { apiListing: Object(y.b)(r, e) };
          }
        )(Pa),
        Fa = Object(x.a)(function(e) {
          var t;
          return {
            root: {},
            markerCard: Object(b.a)(
              {
                width: 200,
                padding: 0,
                position: "relative",
                backgroundColor: "white"
              },
              e.breakpoints.down("sm"),
              { width: "100%", margin: "10px 0px" }
            ),
            mapIcon: {
              color: e.palette.primary.main,
              "&:hover": { color: "red", cursor: "pointer" }
            },
            mapContainer: Object(b.a)(
              { marginTop: 60 },
              e.breakpoints.down("sm"),
              { marginTop: 100 }
            ),
            searchBar: {
              backgroundColor: "white",
              padding: 20,
              position: "fixed",
              zIndex: 2,
              width: "100%"
            },
            searchForm: Object(b.a)(
              { display: "flex", flexDirection: "row", height: 55 },
              e.breakpoints.down("sm"),
              {
                flexWrap: "wrap",
                justifyContent: "space-between",
                height: 240,
                paddingTop: 10
              }
            ),
            searchZip: Object(b.a)(
              { maxWidth: 200, marginRight: 20 },
              e.breakpoints.down("sm"),
              {
                maxWidth: "46%",
                marginBottom: "15px !important",
                marginRight: 0
              }
            ),
            searchBedrooms: Object(b.a)(
              { minWidth: 150, marginRight: 20 },
              e.breakpoints.down("sm"),
              { width: "46%", marginBottom: "15px !important", marginRight: 0 }
            ),
            maxRent: Object(b.a)(
              {
                flexGrow: 0,
                maxWidth: 150,
                marginRight: 20,
                textAlign: "right",
                height: 55
              },
              e.breakpoints.down("sm"),
              {
                maxWidth: "46%",
                marginBottom: "15px !important",
                marginRight: 0
              }
            ),
            marginRight: { marginRight: 20 },
            iconGray: { color: "rgba(0,0,0,.60)" },
            currency: Object(b.a)(
              {
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='30px' width='85px'><text x='10' y='20' fill='gray' font-size='20' font-family='source sans pro'>$</text></svg>\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                flexGrow: 0,
                marginRight: 20
              },
              e.breakpoints.down("sm"),
              { width: "46%", marginRight: 0 }
            ),
            bedrooms: Object(b.a)(
              { width: 120, marginRight: 20, position: "relative" },
              e.breakpoints.down("sm"),
              { width: "46%", marginBottom: 10, marginRight: 0 }
            ),
            moreButton: Object(b.a)(
              {
                width: 120,
                borderRadius: 4,
                position: "relative",
                textTransform: "none",
                fontSize: "1.2em",
                fontWeight: 700,
                height: 55,
                marginRight: 20
              },
              e.breakpoints.down("sm"),
              {
                width: "46%",
                marginRight: 0,
                marginBottom: 10,
                padding: 0,
                boxShadow: "none"
              }
            ),
            searchButton: Object(b.a)(
              {
                width: 120,
                borderRadius: 4,
                position: "relative",
                textTransform: "none",
                fontSize: "1.2em",
                fontWeight: 700,
                height: 55
              },
              e.breakpoints.down("sm"),
              { width: "100%", padding: 0, boxShadow: "none" }
            ),
            drawer:
              ((t = { width: 500, maxWidth: "50%" }),
              Object(b.a)(t, e.breakpoints.down("sm"), { maxWidth: "100%" }),
              Object(b.a)(t, "position", "absolute"),
              Object(b.a)(t, "right", 0),
              Object(b.a)(t, "top", 0),
              Object(b.a)(t, "backgroundColor", "white"),
              Object(b.a)(t, "padding", 20),
              Object(b.a)(t, "minHeight", "100vh"),
              t),
            drawerPaper: Object(b.a)(
              {
                width: 500,
                padding: 20,
                position: "absolute",
                top: 0,
                paddingBottom: 135
              },
              e.breakpoints.down("sm"),
              { maxWidth: "100%", paddingBottom: 160 }
            ),
            buttonWrap: {
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "white"
            },
            leftButton: { marginRight: 20 },
            closeButton: Object(b.a)(
              { display: "none" },
              e.breakpoints.down("sm"),
              { display: "block", position: "absolute", top: 5, right: 5 }
            ),
            clearButton: Object(b.a)(
              { marginLeft: 20, borderRadius: 4 },
              e.breakpoints.down("sm"),
              { marginTop: 10, marginLeft: 0, width: "100%" }
            )
          };
        })(Ga),
        Ba = n(234),
        Wa = n.n(Ba),
        za = (function(e) {
          Object(h.a)(n, e);
          var t = Object(g.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e)).state = {
                message: "You must log in or sign up to post a listing."
              }),
              a
            );
          }
          return (
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = Wa.a.parse(this.props.location.search);
                  e.message &&
                    this.setState({ message: decodeURIComponent(e.message) });
                }
              },
              {
                key: "render",
                value: function() {
                  return Object(Qe.jsxs)("div", {
                    className: this.props.classes.message,
                    "data-test": "component-no-access",
                    children: [
                      Object(Qe.jsxs)("p", {
                        children: [
                          this.props.message
                            ? this.props.message
                            : this.state.message,
                          Object(Qe.jsx)("br", {})
                        ]
                      }),
                      Object(Qe.jsx)("div", {
                        className: this.props.classes.buttonWrap,
                        children: Object(Qe.jsx)(De.a, {
                          type: "button",
                          color: "primary",
                          className: this.props.classes.next,
                          variant: "contained",
                          href: this.props.link,
                          onClick: this.props.setRedirect,
                          children: this.props.buttonText
                        })
                      })
                    ]
                  });
                }
              }
            ]),
            n
          );
        })(s.a.Component),
        $a = Object(f.f)(za),
        Ma = n.p + "static/media/hero_keys_1920x1080.2473bb39.jpg",
        Ha = (function(e) {
          Object(h.a)(n, e);
          var t = Object(g.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e)).search = function() {
                console.log("searching... ".concat(a.searchZip.current.value)),
                  a.searchZip.current.value
                    ? (a.props.apiListing.handleSearch({
                        target: {
                          name: "searchZip",
                          value: a.searchZip.current.value
                        }
                      }),
                      a.props.history.push("/map"))
                    : console.log("no zip provided");
              }),
              (a.main_ref = s.a.createRef()),
              (a.state = { deleteDialogOpen: !1 }),
              (a.searchZip = s.a.createRef()),
              a
            );
          }
          return (
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  if (
                    (console.log("NODE_ENV front end: ".concat("development")),
                    !this.props.appState.loggedIn &&
                      (!this.props.match || !this.props.match.params.id))
                  ) {
                    console.log(
                      "not logged in, looking for id & token in localStorage"
                    );
                    var t = window.localStorage.getItem("authToken"),
                      n = window.localStorage.getItem("userId");
                    console.log(
                      "authToken: ".concat(!!t, ", userId: ").concat(n)
                    ),
                      t &&
                        "undefined" !== t &&
                        n &&
                        "undefined" !== n &&
                        this.props.apiProfile
                          .validateToken(t, n)
                          .then(function(a) {
                            if (
                              (console.log(a.type),
                              "VALIDATE_TOKEN_FAILURE" === a.type)
                            )
                              return (
                                console.log(
                                  "VALIDATE_TOKEN_FAILURE: clearing localStorage"
                                ),
                                window.localStorage.clear()
                              );
                            "VALIDATE_TOKEN_SUCCESS" === a.type &&
                              t &&
                              "undefined" !== t &&
                              n &&
                              "undefined" !== n &&
                              (console.log(
                                "validate token success: "
                                  .concat(!!t, ", ")
                                  .concat(n)
                              ),
                              e.props.apiProfile
                                .getProfile(t, n)
                                .then(function(a) {
                                  if (
                                    (console.log(a.type),
                                    "GET_PROFILE_SUCCESS" === a.type)
                                  ) {
                                    console.log("setting loggedIn here"),
                                      e.props.actions.setLoggedIn(n, t);
                                    var o = window.localStorage.getItem(
                                      "redirect"
                                    );
                                    o &&
                                      (e.props.history.push(o),
                                      window.localStorage.removeItem(
                                        "redirect"
                                      ));
                                  } else console.log("not logged in", t, n), console.log(a.type);
                                }));
                          })
                          .catch(function(e) {
                            return console.log(e), window.localStorage.clear();
                          });
                  }
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.classes,
                    n = this.props.appState.loggedIn,
                    a = !!this.props.profile.profile.phone;
                  return Object(Qe.jsxs)("div", {
                    "data-test": "component-app",
                    className: t.appRoot,
                    children: [
                      Object(Qe.jsx)(j.a, {}),
                      Object(Qe.jsx)(Je, { main_ref: this.main_ref }),
                      Object(Qe.jsx)(Et, {}),
                      this.props.appState.loading && Object(Qe.jsx)(na, {}),
                      Object(Qe.jsx)("main", {
                        className: t.container,
                        id: "main",
                        ref: this.main_ref,
                        children: Object(Qe.jsxs)(f.c, {
                          children: [
                            Object(Qe.jsx)(f.a, {
                              exact: !0,
                              path: "/",
                              render: function(t) {
                                return Object(Qe.jsx)(
                                  et,
                                  Object(d.a)(
                                    Object(d.a)({}, t),
                                    {},
                                    {
                                      classes: e.props.classes,
                                      searchZip: e.searchZip,
                                      searchFunc: e.search
                                    }
                                  )
                                );
                              }
                            }),
                            Object(Qe.jsx)(f.a, {
                              path: "/admin/:id?/:token?",
                              render: function(e) {
                                return Object(Qe.jsx)(Dt, Object(d.a)({}, e));
                              }
                            }),
                            Object(Qe.jsx)(f.a, {
                              path: "/new",
                              render: function(t) {
                                return n && a
                                  ? Object(Qe.jsx)(
                                      Wn,
                                      Object(d.a)(
                                        { setRedirect: e.setRedirect },
                                        t
                                      )
                                    )
                                  : Object(Qe.jsx)(
                                      $a,
                                      Object(d.a)(
                                        {
                                          setRedirect: e.setRedirect,
                                          classes: e.props.classes,
                                          link:
                                            n && e.props.profile.profile.id
                                              ? "/user/".concat(
                                                  e.props.profile.profile.id
                                                )
                                              : "".concat(
                                                  "http://localhost:3001",
                                                  "/api/auth/google"
                                                ),
                                          buttonText:
                                            n && e.props.profile.profile.id
                                              ? "Complete Profile"
                                              : "Log in or Sign up",
                                          message:
                                            n && e.props.profile.profile.id
                                              ? "Please complete your user profile before creating a listing."
                                              : "You must log in or sign up to create a listing."
                                        },
                                        t
                                      )
                                    );
                              }
                            }),
                            Object(Qe.jsx)(f.a, {
                              path: "/map",
                              render: function(t) {
                                return Object(Qe.jsx)(
                                  Fa,
                                  Object(d.a)(
                                    {
                                      listing: e.props.listing,
                                      setRedirect: e.setRedirect
                                    },
                                    t
                                  )
                                );
                              }
                            }),
                            Object(Qe.jsx)(f.a, {
                              path: "/user/:id",
                              render: function(t) {
                                return Object(Qe.jsx)(
                                  ja,
                                  Object(d.a)({ setRedirect: e.setRedirect }, t)
                                );
                              }
                            }),
                            Object(Qe.jsx)(f.a, {
                              path: "/edit/:id",
                              render: function(t) {
                                return Object(Qe.jsx)(
                                  Wn,
                                  Object(d.a)(
                                    { edit: !0, setRedirect: e.setRedirect },
                                    t
                                  )
                                );
                              }
                            }),
                            Object(Qe.jsx)(f.a, {
                              path: "/listings",
                              render: function(t) {
                                return Object(Qe.jsx)(
                                  da,
                                  Object(d.a)({ setRedirect: e.setRedirect }, t)
                                );
                              }
                            }),
                            Object(Qe.jsx)(f.a, {
                              path: "/logout",
                              render: function(t) {
                                return Object(Qe.jsx)(
                                  ot,
                                  Object(d.a)({ classes: e.props.classes }, t)
                                );
                              }
                            }),
                            Object(Qe.jsx)(f.a, {
                              path: "/login",
                              render: function(t) {
                                return Object(Qe.jsx)(
                                  nt,
                                  Object(d.a)({ classes: e.props.classes }, t)
                                );
                              }
                            }),
                            Object(Qe.jsx)(f.a, {
                              path: "*",
                              render: function(t) {
                                return Object(Qe.jsx)(
                                  Xe,
                                  Object(d.a)({ classes: e.props.classes }, t)
                                );
                              }
                            })
                          ]
                        })
                      }),
                      Object(Qe.jsx)(Ke, { classes: this.props.classes })
                    ]
                  });
                }
              }
            ]),
            n
          );
        })(i.Component),
        Za = Object(p.b)(
          function(e) {
            return {
              appState: e.appState,
              profile: e.profile,
              listing: e.listing
            };
          },
          function(e) {
            return {
              actions: Object(y.b)(a, e),
              apiListing: Object(y.b)(r, e),
              apiProfile: Object(y.b)(o, e)
            };
          }
        )(Ha),
        Va = Object(x.a)(function(e) {
          var t, n;
          return {
            root: { flexGrow: 1, boxSizing: "border-box" },
            notFound: { height: "80vh", width: "auto", marginTop: "-60px" },
            container: {
              maxWidth: 1200,
              margin: "auto",
              height: "100%",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            },
            appRoot: Object(b.a)(
              {
                width: "100vw",
                height: "100%",
                minHeight: "80vh",
                backgroundImage: 'url("'.concat(Ma, '")'),
                backgroundAttachment: "fixed",
                backgroundPosition: "bottom"
              },
              e.breakpoints.up("xl"),
              { backgroundSize: "cover" }
            ),
            message:
              ((t = {
                margin: "auto",
                width: "50%",
                textAlign: "center",
                height: "50%"
              }),
              Object(b.a)(t, e.breakpoints.down("sm"), {
                width: "100%",
                height: "100%"
              }),
              Object(b.a)(t, "lineHeight", "2em"),
              Object(b.a)(t, "background", "white"),
              Object(b.a)(t, "borderRadius", "4px"),
              Object(b.a)(t, "padding", 60),
              Object(b.a)(t, "fontSize", "1.2em"),
              t),
            row: Object(b.a)(
              { display: "flex", justifyContent: "center" },
              e.breakpoints.down("md"),
              { flexWrap: "wrap" }
            ),
            button: { height: 100, margin: "20px auto", width: 100 },
            buttonWrap: {
              width: "100%",
              display: "flex",
              justifyContent: "center"
            },
            fLink: {
              color: e.palette.primary.main,
              textDecoration: "none",
              borderBottom: "1px dotted theme.palette.secondary.main",
              "&:hover": { color: e.palette.secondary.light },
              "&:visited": { color: e.palette.primary.main },
              "&:focus": { color: e.palette.primary.main }
            },
            footer: {
              width: "100vw",
              margin: "auto",
              position: "fixed",
              backgroundColor: "white",
              bottom: 0,
              padding: 10,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "middle",
              boxShadow: "0 1px 5px 2px rgba(0,0,0,.2)",
              zIndex: 2,
              color: e.palette.primary.main
            },
            footerIcon:
              ((n = { width: 30, height: "auto", marginTop: 15 }),
              Object(b.a)(n, e.breakpoints.down("sm"), { marginTop: 5 }),
              Object(b.a)(n, "fill", e.palette.secondary.main),
              n),
            spinner: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "block"
            },
            form: { background: "white" },
            hero: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "middle"
            },
            heroHead: Object(b.a)(
              {
                fontFamily: "'Alfa Slab One', cursive",
                fontSize: "4.5em",
                letterSpacing: "2px",
                color: "white",
                textShadow: "0 0 20px rgba(0, 0, 0, 0.63)",
                textAlign: "center"
              },
              e.breakpoints.down("sm"),
              { fontSize: "3em", lineHeight: 1.2, marginTop: 40 }
            ),
            heroSubhead: Object(b.a)(
              {
                fontSize: "3.5em",
                color: "white",
                textShadow: "0 0 20px rgba(0, 0, 0, 0.63)",
                textAlign: "center"
              },
              e.breakpoints.down("sm"),
              { fontSize: "2em", lineHeight: 1.2 }
            ),
            heroForm: { width: "70vw", margin: "auto", display: "flex" },
            heroInput: {
              width: "100%",
              height: 60,
              fontSize: "2em",
              padding: 10,
              borderRadius: 4
            },
            searchButton: {
              fontSize: "1.5em",
              textTransform: "none",
              padding: "10px 20px",
              borderRadius: 4,
              marginLeft: 10,
              color: "white !important"
            },
            bigButton: {
              fontSize: "2em",
              textTransform: "none",
              padding: "10px 20px",
              borderRadius: 4
            }
          };
        })(Object(f.f)(Za)),
        qa = n(196),
        Qa = n(25),
        Ya = n.n(Qa),
        Ja = {
          loggedIn: !1,
          authToken: "",
          loading: !1,
          redirect: "",
          userId: null
        };
      var Ka = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Ja,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case O:
              return Ja;
            case v:
            case J:
            case ee:
            case ue:
            case le:
            case ae:
            case N:
            case A:
              return Ya()(e, { loading: { $set: !0 } });
            case I:
              return Ya()(e, {
                loggedIn: { $set: !0 },
                authToken: { $set: t.payload.token },
                loading: { $set: !1 }
              });
            case R:
              return Ya()(e, { loggedIn: { $set: !1 }, loading: { $set: !1 } });
            case w:
              return Ya()(e, { redirect: { $set: t.payload } });
            case S:
              return Ya()(e, {
                loggedIn: { $set: !0 },
                userId: { $set: t.payload.userId },
                authToken: { $set: t.payload.token }
              });
            case K:
            case X:
            case te:
            case ne:
            case me:
            case he:
            case pe:
            case de:
            case oe:
            case re:
            case D:
            case U:
              return Ya()(e, { loading: { $set: !1 } });
            default:
              return e;
          }
        },
        Xa = {
          profile: {
            id: "",
            name: "",
            email: "",
            phone: "",
            avatarUrl: "",
            companyName: "",
            companyStreet: "",
            companyCity: "",
            companyState: "",
            companyZip: ""
          },
          error: null
        };
      var eo = function() {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Xa,
            n = arguments.length > 1 ? arguments[1] : void 0;
          switch (n.type) {
            case O:
              return Xa;
            case A:
            case P:
              return Ya()(t, { error: { $set: null } });
            case D:
            case G:
              console.log(n.payload.name);
              var a =
                n.payload.name &&
                n.payload.name.includes(":") &&
                n.payload.name.familyName
                  ? ""
                      .concat(JSON.parse(n.payload.name).givenName, " ")
                      .concat(JSON.parse(n.payload.name).familyName)
                  : n.payload.name && n.payload.name.includes(":")
                  ? JSON.parse(n.payload.name).givenName
                  : n.payload.name && "object" === typeof n.payload.name
                  ? ""
                      .concat(n.payload.name.givenName, " ")
                      .concat(n.payload.name.familyName)
                  : "";
              return Ya()(t, {
                profile: {
                  id: { $set: n.payload.id },
                  name: { $set: a },
                  email: { $set: n.payload.email },
                  phone: { $set: n.payload.phone },
                  avatarUrl: { $set: n.payload.avatar_url },
                  companyName: { $set: n.payload.company_name },
                  companyStreet: { $set: n.payload.company_street },
                  companyCity: { $set: n.payload.company_city },
                  companyState: { $set: n.payload.company_state },
                  companyZip: { $set: n.payload.company_zip }
                },
                error: { $set: null }
              });
            case U:
            case F:
              return (
                (e =
                  "string" === typeof n.payload.message
                    ? n.payload.message
                    : "Sorry, something went wrong :(\nPlease try again."),
                Ya()(t, { error: { $set: e } })
              );
            default:
              return t;
          }
        },
        to = {
          filteredListings: [],
          allListings: [],
          userListings: [],
          deleteDialogOpen: !1,
          currentListing: {
            listing_type: null,
            listing: "",
            created_at: "",
            updated_at: ""
          },
          search: {
            bedrooms: "",
            maxRent: "",
            dialogOpen: !1,
            searchZip: "97201",
            features: []
          },
          error: null
        };
      var no = function() {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : to,
            n = arguments.length > 1 ? arguments[1] : void 0;
          switch (n.type) {
            case O:
              return to;
            case $:
              return Ya()(t, {
                form: Object(b.a)({}, n.payload.name, { $set: n.payload.value })
              });
            case M:
              return Ya()(t, {
                search: Object(b.a)({}, n.payload.name, {
                  $set: n.payload.value
                })
              });
            case H:
              return Ya()(t, {
                deleteDialogOpen: { $set: !0 },
                currentListing: {
                  $set: Object(d.a)({}, n.payload.selectedListing)
                }
              });
            case Z:
            case pe:
              return Ya()(t, {
                deleteDialogOpen: { $set: !1 },
                currentListing: {
                  id: { $set: "" },
                  listing_type: { $set: "" },
                  listing: { $set: "" },
                  created_at: { $set: "" },
                  updated_at: { $set: "" }
                },
                error: { $set: null }
              });
            case V:
              return console.log("clear form"), Ya()(t, { form: { $set: {} } });
            case q:
              return (
                console.log("clear search"), Ya()(t, { search: { $set: {} } })
              );
            case Q:
              return (
                console.log("clear features"),
                Ya()(t, { search: { features: { $set: [] } } })
              );
            case Y:
              return (
                console.log("UPDATE_FILTER"),
                console.log(n.payload),
                Ya()(t, { filteredListings: { $set: Object(Qt.a)(n.payload) } })
              );
            case J:
            case ee:
            case ue:
            case le:
            case ae:
            case ie:
              return Ya()(t, { error: { $set: null } });
            case K:
            case te:
            case me:
              var a = {};
              n.payload.features &&
                n.payload.features.forEach(function(e) {
                  a[e] = !0;
                });
              var o = {
                  propertyName: n.payload.property_name,
                  propertyStreet: n.payload.property_street,
                  propertyCity: n.payload.property_city,
                  propertyState: n.payload.property_state,
                  propertyZip: n.payload.property_zip,
                  quadrant: n.payload.property_quadrant,
                  propertyCounty: n.payload.property_county,
                  propertyPhone: n.payload.property_phone,
                  propertyEmail: n.payload.property_email,
                  listingUrl: n.payload.listing_url,
                  primaryImage:
                    n.payload.primary_image ||
                    "https://www.oregonlive.com/resizer/WT8ZztMJGjquhHZQN--FpxQzghA=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/expo.advance.net/img/1c2d086149/width2048/0ce_bronaughapartmentsportlandoregon.jpeg",
                  bedroomsPriceString: Ve(
                    n.payload.studio_l,
                    n.payload.studio_h,
                    n.payload.br_1l,
                    n.payload.br_1h,
                    n.payload.br_2l,
                    n.payload.br_2h,
                    n.payload.br_3l,
                    n.payload.br_3h,
                    n.payload.br_4l,
                    n.payload.br_4h,
                    n.payload.br_5l,
                    n.payload.br_5h
                  ),
                  notes: n.payload.notes,
                  availability: n.payload.availability,
                  pets: n.payload.pets,
                  laundryType: n.payload.laundry_type,
                  userId: n.payload.user_id,
                  dialogOpen: !1
                },
                r = Object(d.a)(Object(d.a)({}, o), a);
              return Ya()(t, { form: { $set: r }, error: { $set: null } });
            case oe:
              return Ya()(t, {
                allListings: { $set: n.payload },
                filteredListings: { $set: n.payload },
                error: { $set: null }
              });
            case se:
              return Ya()(t, {
                userListings: { $set: n.payload },
                error: { $set: null }
              });
            case X:
            case ne:
            case he:
            case de:
            case re:
            case ce:
              return (
                (e =
                  "string" === typeof n.payload.message
                    ? n.payload.message
                    : "Sorry, something went wrong :(\nPlease try again."),
                Ya()(t, { error: { $set: e } })
              );
            default:
              return t;
          }
        },
        ao = Object(y.c)({
          appState: Ka,
          profile: eo,
          listing: no,
          form: qa.a
        }),
        oo = Object(y.a)(E.apiMiddleware),
        ro = [E.apiMiddleware],
        io =
          (y.a.apply(void 0, ro)(y.e),
          Object(y.e)(
            ao,
            Object(y.d)(
              oo,
              window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : function(e) {
                    return e;
                  }
            )
          ));
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var so = n(511),
        co = n(235),
        lo = n(153),
        po = n.n(lo),
        uo = {
          palette: {
            primary: {
              main: "rgb(0, 170, 164)",
              light: "rgb(120, 192, 75)",
              contrastText: "white"
            },
            secondary: { main: "#c77137", light: "#d3a900" },
            danger: { main: po.a[900], light: po.a[700] },
            success: { main: dt.a[600], light: dt.a[400] },
            textColor: "#333",
            secondaryTextColor: "rgb(0, 170, 164)",
            bodyBackground: "#fff",
            type: "light"
          },
          breakpoints: {
            values: { xs: 0, sm: 450, md: 600, lg: 960, xl: 1280 }
          },
          typography: {
            useNextVariants: !0,
            fontFamily: [
              '"Source Sans Pro"',
              '"Helvetica Neue"',
              "Helvetica",
              "Arial",
              "sans-serif"
            ].join(",")
          },
          overrides: {
            MuiMenu: {
              paper: {
                position: "absolute",
                top: "60px !important",
                borderTop: "1px solid white",
                left: "0 !important",
                width: "200px !important",
                borderRadius: "0 !important",
                filter: "none !important",
                "@media screen and (max-width: 450px)": {
                  top: "100px !important"
                }
              }
            },
            MuiButton: {
              root: {
                borderRadius: 0,
                fontFamily: [
                  '"Source Sans Pro"',
                  '"Helvetica Neue"',
                  "Helvetica",
                  "Arial",
                  "sans-serif"
                ].join(","),
                fontWeight: 400,
                textDecoration: "none"
              }
            },
            MuiFormLabel: {
              root: { "&$focused": { "&$focused": { color: "secondary" } } }
            },
            "MuiButton-outlinedSecondary": { border: 2 },
            MuiTypography: {
              root: {
                fontFamily: [
                  '"Source Sans Pro"',
                  '"Helvetica Neue"',
                  "Helvetica",
                  "Arial",
                  "sans-serif"
                ].join(",")
              }
            }
          }
        },
        mo = Object(co.a)(uo),
        ho = (function(e) {
          Object(h.a)(n, e);
          var t = Object(g.a)(n);
          function n() {
            return Object(u.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(m.a)(n, [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  this.props.location === e.location ||
                    this.props.location.hash ||
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
              },
              {
                key: "render",
                value: function() {
                  return this.props.children;
                }
              }
            ]),
            n
          );
        })(s.a.Component),
        go = Object(f.f)(ho);
      Object(c.render)(
        Object(Qe.jsx)(p.a, {
          store: io,
          children: Object(Qe.jsx)(l.a, {
            children: Object(Qe.jsx)(go, {
              children: Object(Qe.jsx)(so.a, {
                theme: mo,
                children: Object(Qe.jsx)(Va, {})
              })
            })
          })
        }),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[427, 1, 2]]
]);
//# sourceMappingURL=main.e5c06dcc.chunk.js.map
