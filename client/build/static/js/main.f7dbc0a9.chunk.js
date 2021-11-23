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
          return _;
        }),
        n.d(a, "logout", function() {
          return w;
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
          return H;
        }),
        n.d(r, "HANDLE_DELETE_OPEN", function() {
          return M;
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
          return be;
        }),
        n.d(r, "handleSearch", function() {
          return ge;
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
          return _e;
        }),
        n.d(r, "getAllListings", function() {
          return we;
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
        d = (n(281), n(7)),
        u = n(26),
        m = n(27),
        h = n(29),
        b = n(28),
        g = n(8),
        f = n(32),
        y = n(14),
        j = n(510),
        x = n(6),
        O = "LOGOUT",
        S = "SET_LOGGEDIN",
        v = "SET_SPINNER",
        _ = "SET_REDIRECT_URL";
      function w() {
        return { type: O };
      }
      function k(e, t) {
        return { type: S, payload: { userId: e, token: t } };
      }
      function L() {
        return { type: v };
      }
      function C(e) {
        return { type: _, payload: e };
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
        return Object(g.a)({}, E.RSAA, {
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
        return Object(g.a)({}, E.RSAA, {
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
          Object(g.a)({}, E.RSAA, {
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
        H = "HANDLE_SEARCH",
        M = "HANDLE_DELETE_OPEN",
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
      function be(e) {
        var t = e.target,
          n = t.name,
          a = t.value;
        return { type: $, payload: { name: n, value: a } };
      }
      function ge(e) {
        var t = e.target,
          n = t.name,
          a = t.value;
        return { type: H, payload: { name: n, value: a } };
      }
      function fe(e) {
        return { type: M, payload: { selectedListing: e } };
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
        return Object(g.a)({}, E.RSAA, {
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
      function _e(e, t) {
        return Object(g.a)({}, E.RSAA, {
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
      function we() {
        return Object(g.a)({}, E.RSAA, {
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
          Object(g.a)({}, E.RSAA, {
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
          Object(g.a)({}, E.RSAA, {
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
        return Object(g.a)({}, E.RSAA, {
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
        He = n(204),
        Me = n.n(He),
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
        qe = function(e, t, n, a, o, r, i, s, c, l, p, d) {
          return {
            studio: { l: e, h: t },
            br1: { l: n, h: a },
            br2: { l: o, h: r },
            br3: { l: i, h: s },
            br4: { l: c, h: l },
            br5: { l: p, h: d }
          };
        },
        Qe = function(e) {
          return e.map(function(e) {
            return Object(d.a)(
              Object(d.a)({}, e),
              {},
              {
                bedroomsPriceObj: qe(
                  e.studio_l,
                  e.studio_h,
                  e.br1_l,
                  e.br1_h,
                  e.br2_l,
                  e.br2_h,
                  e.br3_l,
                  e.br3_h,
                  e.br4_l,
                  e.br4_h,
                  e.br5_l,
                  e.br5_h
                ),
                bedroomsPriceString: Ve(
                  e.studio_l,
                  e.studio_h,
                  e.br1_l,
                  e.br1_h,
                  e.br2_l,
                  e.br2_h,
                  e.br3_l,
                  e.br3_h,
                  e.br4_l,
                  e.br4_h,
                  e.br5_l,
                  e.br5_h
                )
              }
            );
          });
        },
        Ye = n.p + "static/media/CV-logo-hdr-horiz.7cd78e55.png",
        Je = n(2),
        Ke = (function(e) {
          Object(h.a)(n, e);
          var t = Object(b.a)(n);
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
                      return Object(Je.jsx)(Be.a, {
                        button: !0,
                        component: De.a,
                        href: "/".concat(r),
                        onClick: function() {
                          e.props.history.push("/".concat(r)), o();
                        },
                        className: t.menuItem,
                        "data-test": "menu-item-mobile",
                        children: Object(Je.jsx)(We.a, {
                          primary: a,
                          primaryTypographyProps: { color: "secondary" }
                        })
                      });
                    },
                    c = Object(Je.jsx)("div", {
                      "data-test": "mobile-links",
                      children: r.map(function(t, n) {
                        return Object(Je.jsx)(
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
                    Object(Je.jsx)("div", {
                      className: t.root,
                      "data-test": "component-navbar",
                      children: Object(Je.jsx)(Ie.a, {
                        position: "fixed",
                        className: t.appBar,
                        children: Object(Je.jsxs)(Re.a, {
                          className: t.toolbar,
                          children: [
                            Object(Je.jsx)(De.a, {
                              color: "primary",
                              variant: "contained",
                              className: t.skip,
                              onClick: this.skipToMain,
                              "data-test": "skiplink-button",
                              children: "Skip to content \u203a"
                            }),
                            Object(Je.jsxs)(s.a.Fragment, {
                              children: [
                                Object(Je.jsxs)(Ue.a, {
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
                                    Object(Je.jsx)(Ge.a, {}),
                                    Object(Je.jsx)(Ae.a, {
                                      className: t.menuLabel,
                                      children: "Menu"
                                    })
                                  ]
                                }),
                                Object(Je.jsx)(Fe.a, {
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
                            Object(Je.jsx)(l.b, {
                              to: "/",
                              className: t.logoLink,
                              "data-test": "logo-link",
                              children: Object(Je.jsx)("img", {
                                src: Ye,
                                alt: "Community Vision",
                                className: t.logo,
                                "data-test": "logo-image"
                              })
                            }),
                            Object(Je.jsx)(Ae.a, {
                              variant: "h6",
                              color: "inherit",
                              className: t.title,
                              "data-test": "title",
                              children: Object(Je.jsx)(l.b, {
                                to: "/",
                                className: t.title,
                                children: "Accessible Housing Hotsheet"
                              })
                            }),
                            a
                              ? Object(Je.jsx)("div", {
                                  className: t.admin,
                                  children: Object(Je.jsx)($e.a, {
                                    alt: this.props.profile.profile.name,
                                    src: this.props.profile.profile.avatarUrl,
                                    className: t.avatar
                                  })
                                })
                              : Object(Je.jsx)("a", {
                                  className: t.loginLinkNavBar,
                                  href: "".concat(
                                    "http://localhost:3001",
                                    "/api/auth/google"
                                  ),
                                  children: p ? "Log in" : "Log in / Sign up"
                                }),
                            Object(Je.jsx)(De.a, {
                              className: t.buttonRight,
                              "data-test": "button-right",
                              href: "/new",
                              type: "button",
                              children: p
                                ? Object(Je.jsx)(Me.a, {})
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
        Xe = Object(Ne.a)()(
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
                appBar: Object(g.a)(
                  { backgroundColor: "white", position: "fixed", height: 60 },
                  e.breakpoints.down("sm"),
                  { height: 100 }
                ),
                menuButton: Object(g.a)(
                  { display: "block" },
                  e.breakpoints.down("sm"),
                  { position: "absolute", left: 12, top: 12 }
                ),
                menuWrap: Object(g.a)({}, e.breakpoints.down("sm"), {
                  display: "none"
                }),
                menuLink: Object(g.a)(
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
                  Object(g.a)(t, e.breakpoints.down("md"), {
                    fontSize: "1.6rem",
                    lineHeight: 1.1,
                    fontWeight: 400
                  }),
                  Object(g.a)(t, e.breakpoints.down("sm"), {
                    textAlign: "center",
                    marginTop: 10,
                    paddingLeft: 0
                  }),
                  Object(g.a)(t, e.breakpoints.down("xs"), {
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
                avatar: Object(g.a)(
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
                logo: Object(g.a)(
                  { height: 30, width: "auto", marginRight: 10 },
                  e.breakpoints.down("sm"),
                  { margin: 0 }
                ),
                logoLink: Object(g.a)(
                  { display: "flex" },
                  e.breakpoints.down("sm"),
                  { width: "100%", justifyContent: "center" }
                ),
                menuLabel: { marginLeft: 3 },
                toolbar: Object(g.a)({}, e.breakpoints.down("sm"), {
                  flexWrap: "wrap",
                  paddingTop: 20
                }),
                loginLinkNavBar:
                  ((n = {
                    marginRight: 120,
                    color: e.palette.primary.main,
                    textDecoration: "none"
                  }),
                  Object(g.a)(n, e.breakpoints.down("sm"), {
                    position: "absolute",
                    top: 20,
                    right: 80,
                    marginRight: 0
                  }),
                  Object(g.a)(n, "&:hover", {
                    borderBottom: "1px dotted ".concat(e.palette.primary.main)
                  }),
                  Object(g.a)(n, "&:focus", {
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
              })(Ke)
            )
          )
        ),
        et = function(e) {
          return Object(Je.jsxs)("div", {
            className: e.classes.footer,
            "data-test": "component-footer",
            children: [
              "\xa9",
              new Date().getFullYear(),
              "\xa0",
              Object(Je.jsx)("a", {
                className: e.classes.fLink,
                href: "https://cvision.org/",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Community Vision"
              })
            ]
          });
        },
        tt = function(e) {
          return Object(Je.jsx)("div", {
            className: e.classes.container,
            "data-test": "component-not-found",
            children: "404 error. Sorry, page not found."
          });
        },
        nt = function(e) {
          var t = e.classes,
            n = e.searchFunc,
            a = e.searchZip;
          return Object(Je.jsxs)("div", {
            className: t.home,
            "data-test": "component-home",
            children: [
              Object(Je.jsx)("h2", {
                className: t.heroHead,
                children: "Accessible housing starts here"
              }),
              Object(Je.jsx)("p", {
                className: t.heroSubhead,
                children: "What are you searching for?"
              }),
              Object(Je.jsxs)("form", {
                className: t.heroForm,
                children: [
                  Object(Je.jsx)("input", {
                    ref: a,
                    className: t.heroInput,
                    type: "text",
                    placeholder: "Zip code",
                    name: "zip",
                    id: "zip"
                  }),
                  Object(Je.jsx)(De.a, {
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
        at = (function(e) {
          Object(h.a)(n, e);
          var t = Object(b.a)(n);
          function n() {
            return Object(u.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(m.a)(n, [
              {
                key: "render",
                value: function() {
                  return Object(Je.jsx)("div", {
                    className: this.props.classes.fullWidthContainer,
                    "data-test": "component-login",
                    children: Object(Je.jsx)("div", {
                      className: this.props.classes.buttonWrap,
                      children: Object(Je.jsx)(De.a, {
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
        ot = at,
        rt = (function(e) {
          Object(h.a)(n, e);
          var t = Object(b.a)(n);
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
                  return Object(Je.jsx)("div", {
                    className: this.props.classes.fullContainer,
                    "data-test": "component-logout",
                    children: Object(Je.jsx)(Ae.a, {
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
        it = Object(p.b)(null, function(e) {
          return { actions: Object(y.b)(a, e) };
        })(rt),
        st = n(71),
        ct = n(149),
        lt = n.n(ct),
        pt = n(121),
        dt = n.n(pt),
        ut = n(98),
        mt = n.n(ut),
        ht = n(209),
        bt = n.n(ht),
        gt = n(494),
        ft = n(205),
        yt = n.n(ft),
        jt = n(206),
        xt = n.n(jt),
        Ot = n(207),
        St = n.n(Ot),
        vt = n(208),
        _t = n.n(vt),
        wt = ["classes", "className", "message", "onClose", "variant"],
        kt = { success: yt.a, warning: xt.a, error: St.a, info: _t.a },
        Lt = Object(x.a)(function(e) {
          return {
            success: { backgroundColor: mt.a[600] },
            error: { backgroundColor: e.palette.error.dark },
            info: { backgroundColor: e.palette.primary.dark },
            warning: { backgroundColor: bt.a[700] },
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
            i = Object(st.a)(e, wt),
            s = kt[r];
          return Object(Je.jsx)(
            gt.a,
            Object(d.a)(
              {
                className: lt()(t[r], n),
                "data-test": "component-custom-snackbar",
                "aria-describedby": "client-snackbar",
                message: Object(Je.jsxs)("span", {
                  id: "client-snackbar",
                  className: t.message,
                  "data-test": "message",
                  children: [
                    Object(Je.jsx)(s, {
                      className: lt()(t.icon, t.iconVariant),
                      "data-test": "message-icon"
                    }),
                    a
                  ]
                }),
                action: [
                  Object(Je.jsx)(
                    Ue.a,
                    {
                      "aria-label": "Close",
                      color: "inherit",
                      className: t.close,
                      onClick: o,
                      "data-test": "icon-button",
                      children: Object(Je.jsx)(dt.a, {
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
        Ct = n(517),
        Et = (function(e) {
          Object(h.a)(n, e);
          var t = Object(b.a)(n);
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
                  var e = Object(Je.jsx)("span", {
                    id: "snackbar-message-id",
                    dangerouslySetInnerHTML: { __html: this.state.message },
                    "data-test": "message-span"
                  });
                  return Object(Je.jsx)(Ct.a, {
                    anchorOrigin: { vertical: "bottom", horizontal: "right" },
                    open: this.state.open,
                    autoHideDuration: 6e3,
                    onClose: this.handleSnackbarClose,
                    "data-test": "component-notifier",
                    children: Object(Je.jsx)(Lt, {
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
        Tt = function(e, t, n, a) {
          if ("function" === typeof Ee || a) return Ee(e, t);
          setTimeout(function() {
            return Ee(e, t);
          }, 100);
        },
        Nt = Et,
        It = n(495),
        Rt = n(496),
        At = n(497),
        Dt = (function(e) {
          Object(h.a)(n, e);
          var t = Object(b.a)(n);
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
                        } else console.log("not logged in"), console.log(a), Tt("error", "Please log in to view this page.");
                      })
                      .catch(function(e) {
                        Tt("error", e);
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
                  return Object(Je.jsx)("div", {
                    className: t.container,
                    "data-test": "component-dashboard",
                    children:
                      a &&
                      !o &&
                      Object(Je.jsxs)(It.a, {
                        className: t.card,
                        children: [
                          Object(Je.jsx)(Rt.a, {
                            className: t.media,
                            children: Object(Je.jsx)($e.a, {
                              alt: "".concat(n.profile.name),
                              className: t.avatar,
                              src: n.profile.avatarUrl
                            })
                          }),
                          Object(Je.jsxs)(At.a, {
                            className: t.content,
                            children: [
                              Object(Je.jsx)(Ae.a, {
                                variant: "h5",
                                className: t.name,
                                children: "".concat(n.profile.name)
                              }),
                              Object(Je.jsx)(Ae.a, {
                                variant: "h6",
                                className: t.secondary,
                                children: "".concat(n.profile.email)
                              }),
                              n.profile.phone &&
                                Object(Je.jsx)(Ae.a, {
                                  variant: "h6",
                                  className: t.secondary,
                                  children: "".concat(n.profile.phone)
                                }),
                              n.profile.companyName &&
                                Object(Je.jsxs)("div", {
                                  children: [
                                    Object(Je.jsx)(Ae.a, {
                                      variant: "h5",
                                      className: t.name,
                                      children: "".concat(n.profile.companyName)
                                    }),
                                    Object(Je.jsx)(Ae.a, {
                                      variant: "h6",
                                      className: t.secondary,
                                      children: "".concat(
                                        n.profile.companyStreet
                                      )
                                    }),
                                    Object(Je.jsx)(Ae.a, {
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
        Ut = Object(p.b)(
          function(e) {
            return { appState: e.appState, profile: e.profile };
          },
          function(e) {
            return { actions: Object(y.b)(a, e), api: Object(y.b)(o, e) };
          }
        )(Dt),
        Pt = Object(f.f)(
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
          })(Ut)
        ),
        Gt = n(23),
        Ft = n.n(Gt),
        Bt = n(41),
        Wt = n(197),
        zt = n(199),
        $t = n(200),
        Ht = n(185),
        Mt = n(198),
        Zt = n(48),
        Vt = n(194),
        qt = n(195),
        Qt = n(436),
        Yt = n(438),
        Jt = n(88),
        Kt = n(150),
        Xt = n.n(Kt),
        en = n(3),
        tn = n.n(en),
        nn = n(499),
        an = n(432),
        on = n(439),
        rn = n(513),
        sn = n(440),
        cn = n(435),
        ln = n(434),
        pn = n(500),
        dn = n(437),
        un =
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
        mn = n(225),
        hn = n.n(mn),
        bn = [
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
        gn = [
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
        fn = [
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
        yn = [
          "input",
          "label",
          "id",
          "validate",
          "classes",
          "meta",
          "formControlName"
        ],
        jn = function(e) {
          return Tt(
            "error",
            e || "Sorry, something went wrong. Please try again."
          );
        },
        xn = function(e) {
          var t;
          return {
            formContainer:
              ((t = { padding: "80px 0 140px 0", margin: "auto 0 auto 50%" }),
              Object(g.a)(t, e.breakpoints.down("xl"), {
                margin: "44px 0 auto 50%"
              }),
              Object(g.a)(t, e.breakpoints.down("lg"), { padding: "20px 0" }),
              Object(g.a)(t, e.breakpoints.down("md"), { margin: "44px auto" }),
              Object(g.a)(t, e.breakpoints.only("xs"), {
                width: "100vw",
                position: "absolute",
                left: 0,
                top: 0,
                margin: "36px auto"
              }),
              t),
            formContainerEmbed: Object(g.a)(
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
            form: Object(g.a)(
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
            quadrant: Object(g.a)({ width: "100%" }, e.breakpoints.only("xs"), {
              marginRight: "0 !important",
              width: "100%"
            }),
            currency2: Object(g.a)(
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
            formGroup2Col: Object(g.a)(
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
            input2Col: Object(g.a)({ width: "48%" }, e.breakpoints.down("xs"), {
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
            card: Object(g.a)({ display: "flex" }, e.breakpoints.down("xs"), {
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
        On = {
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
        Sn = Object.keys(On),
        vn = function(e) {
          var t = [];
          return (
            Sn.forEach(function(n) {
              e[n] && t.push(n);
            }),
            console.log(t),
            t
          );
        },
        _n = function(e) {
          return Object(Je.jsx)(un.a, {
            position: "start",
            children: Object(Je.jsx)(hn.a, { className: e.iconGray })
          });
        },
        wn = function(e) {
          return Object(Je.jsx)(un.a, {
            position: "end",
            children: Object(Je.jsx)("span", {
              className: e.iconGray,
              children: "months"
            })
          });
        },
        kn = function(e) {
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
            b = e.formControlName,
            g = e.inputProps,
            f = e.inputLabelProps,
            y = e.startAdornment,
            j = e.endAdornment,
            x = Object(st.a)(e, bn);
          return Object(Je.jsx)(
            nn.a,
            Object(d.a)(
              Object(d.a)(
                Object(d.a)(
                  {
                    label: a,
                    error: !(!r || !i),
                    variant: "outlined",
                    className: s[b] || s.input,
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
                inputProps: Object(d.a)({ id: n, min: m, step: h }, g),
                InputProps: {
                  startAdornment: "currency" === y ? _n(s) : null,
                  endAdornment: "months" === j ? wn(s) : null
                },
                InputLabelProps: f,
                onBlur: function(e) {
                  t.onBlur(), u && u(e);
                }
              }
            )
          );
        },
        Ln = function(e) {
          return "right" === e ? { direction: "ltr" } : {};
        },
        Cn = function(e) {
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
            b = e.mobile,
            g = e.formControlName,
            f = e.inputProps,
            y = (e.inputLabelProps, Object(st.a)(e, fn));
          return Object(Je.jsxs)(
            ln.a,
            Object(d.a)(
              Object(d.a)(
                {
                  variant: "outlined",
                  className: r[g] || r.formControl,
                  error: !(!c || !l)
                },
                y
              ),
              {},
              {
                required: l && "Required" === c,
                style: m
                  ? { width: 80 }
                  : b
                  ? { width: "100%" }
                  : h
                  ? { marginRight: 20 }
                  : {},
                children: [
                  Object(Je.jsx)(cn.a, { htmlFor: n, children: o }),
                  Object(Je.jsx)(
                    on.a,
                    Object(d.a)(
                      Object(d.a)(
                        {
                          native: !0,
                          input: Object(Je.jsx)(sn.a, {
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
                          return Object(Je.jsx)(
                            "option",
                            {
                              value: e ? e.toLowerCase() : "",
                              style: Ln(i),
                              children: e
                            },
                            Xt()()
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
        En = function(e) {
          var t = e.input,
            n = e.label,
            a = e.id,
            o = (e.validate, e.classes),
            r = e.meta,
            i = r.touched,
            s = r.error,
            c = e.formControlName,
            l = Object(st.a)(e, yn);
          return Object(Je.jsxs)(ln.a, {
            error: !(!i || !s),
            className: o[c] || o.formControl,
            children: [
              Object(Je.jsx)(pn.a, {
                label: n,
                control: Object(Je.jsx)(
                  rn.a,
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
                Object(Je.jsx)(dn.a, {
                  className: o.checkboxErrorText,
                  children: s
                })
            ]
          });
        };
      (nn.a.propTypes = {
        input: tn.a.shape({
          onBlur: tn.a.func,
          onChange: tn.a.func,
          onDragStart: tn.a.func,
          onDrop: tn.a.func,
          onFocus: tn.a.func,
          value: tn.a.string
        }),
        name: tn.a.string,
        label: tn.a.string,
        touched: tn.a.bool,
        error: tn.a.oneOfType([tn.a.string, tn.a.bool]),
        helperText: tn.a.oneOfType([tn.a.string, tn.a.bool])
      }),
        (on.a.propTypes = {
          input: tn.a.shape({
            onBlur: tn.a.func,
            onChange: tn.a.func,
            onDragStart: tn.a.func,
            onDrop: tn.a.func,
            onFocus: tn.a.func,
            value: tn.a.string
          }),
          name: tn.a.string,
          label: tn.a.string,
          labelWidth: tn.a.string,
          formControlName: tn.a.string,
          options: tn.a.array,
          touched: tn.a.bool,
          error: tn.a.oneOfType([tn.a.string, tn.a.bool])
        }),
        (rn.a.propTypes = {
          input: tn.a.shape({
            onBlur: tn.a.func,
            onChange: tn.a.func,
            onDragStart: tn.a.func,
            onDrop: tn.a.func,
            onFocus: tn.a.func,
            value: tn.a.string
          }),
          name: tn.a.string,
          label: tn.a.string,
          touched: tn.a.bool,
          error: tn.a.oneOfType([tn.a.string, tn.a.bool]),
          checked: tn.a.bool
        }),
        (ln.a.propTypes = {
          touched: tn.a.bool,
          error: tn.a.oneOfType([tn.a.string, tn.a.bool])
        });
      var Tn = [
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
        Nn = function(e) {
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
        In = function() {
          for (
            var e = [], t = new Date().getFullYear() - 109;
            t <= new Date().getFullYear();
            t++
          )
            e.unshift(t.toString());
          return e.unshift(""), e;
        },
        Rn = Cn,
        An = kn,
        Dn = function(e) {
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
            b = (e.inputProps, Object(st.a)(e, gn));
          return Object(Je.jsx)(
            an.a,
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
                b
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
        Un = En,
        Pn = On,
        Gn = Object(qt.a)({
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
            i = Object.keys(Pn).map(function(e) {
              return Object(Je.jsx)(
                Vt.a,
                {
                  label: Pn[e],
                  name: e,
                  id: e,
                  type: "checkbox",
                  formControlName: "controlCheckbox",
                  classes: n,
                  component: Un
                },
                e
              );
            });
          return (
            console.log(e),
            Object(Je.jsx)("div", {
              "data-test": "component-add-listing",
              className: n.sectionContainer,
              children: Object(Je.jsxs)("form", {
                onSubmit: e.handleSubmit(t),
                id: "addListing",
                className: n.form,
                children: [
                  Object(Je.jsx)(Ae.a, {
                    className: n.formTitle,
                    variant: "h3",
                    children: "Add Listing"
                  }),
                  Object(Je.jsxs)("div", {
                    className: n.formSection,
                    children: [
                      Object(Je.jsx)(Vt.a, {
                        label: "Property Name",
                        name: "propertyName",
                        id: "propertyName",
                        type: "text",
                        classes: n,
                        component: An
                      }),
                      Object(Je.jsx)(Qt.a, {
                        className: n.formLabel,
                        component: "legend",
                        children: "Address"
                      }),
                      Object(Je.jsx)(Vt.a, {
                        label: "Street Address",
                        name: "propertyStreet",
                        id: "propertyStreet",
                        type: "text",
                        classes: n,
                        component: An
                      }),
                      Object(Je.jsxs)(Yt.a, {
                        className: n.formGroup,
                        row: !0,
                        classes: { root: n.formGroup2Col },
                        children: [
                          Object(Je.jsx)(Vt.a, {
                            label: "City",
                            name: "propertyCity",
                            id: "propertyCity",
                            type: "text",
                            twocol: !0,
                            mobile: !Object(Ne.b)("sm", o),
                            classes: n,
                            component: An
                          }),
                          Object(Je.jsx)(Vt.a, {
                            label: "State",
                            name: "propertyState",
                            id: "propertyState",
                            type: "select",
                            short: !0,
                            mobile: !Object(Ne.b)("sm", o),
                            classes: n,
                            component: Rn,
                            options: ["", "OR", "WA"],
                            labelWidth: 80
                          }),
                          Object(Je.jsx)(Vt.a, {
                            label: "Zip",
                            name: "propertyZip",
                            id: "propertyZip",
                            short: !0,
                            mobile: !Object(Ne.b)("sm", o),
                            type: "text",
                            classes: n,
                            component: An
                          })
                        ]
                      }),
                      Object(Je.jsxs)(Yt.a, {
                        row: !0,
                        classes: { root: n.formGroup2Col },
                        children: [
                          Object(Je.jsx)(Vt.a, {
                            "data-test": "select-quadrant",
                            label: "Quadrant",
                            name: "quadrant",
                            id: "quadrant",
                            type: "select",
                            classes: n,
                            component: Rn,
                            formControlName: "quadrant",
                            options: ["", "N", "NE", "NW", "SE", "SW"],
                            onChange: function() {},
                            labelWidth: 100,
                            twocol: !0
                          }),
                          Object(Je.jsx)(Vt.a, {
                            label: "County",
                            name: "propertyCounty",
                            id: "propertyCounty",
                            type: "text",
                            classes: n,
                            component: Rn,
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
                      Object(Je.jsx)(Vt.a, {
                        label: "Property contact phone",
                        name: "propertyPhone",
                        id: "propertyPhone",
                        type: "tel",
                        classes: n,
                        component: An
                      }),
                      Object(Je.jsx)(Vt.a, {
                        label: "Property contact email",
                        name: "propertyEmail",
                        id: "propertyEmail",
                        type: "email",
                        classes: n,
                        component: An
                      }),
                      Object(Je.jsx)(Vt.a, {
                        label: "Link to property listing",
                        name: "listingUrl",
                        id: "listingUrl",
                        type: "url",
                        classes: n,
                        component: An
                      }),
                      Object(Je.jsx)(Vt.a, {
                        label: "Link to property image",
                        name: "primaryImage",
                        id: "primaryImage",
                        type: "url",
                        classes: n,
                        component: An
                      }),
                      Object(Je.jsx)(Qt.a, {
                        className: n.formLabel,
                        component: "legend",
                        children: "Date Available"
                      }),
                      Object(Je.jsxs)(Yt.a, {
                        row: !0,
                        classes: { root: n.formGroup2ColShort },
                        children: [
                          Object(Je.jsx)(Vt.a, {
                            label: "Month",
                            name: "mm",
                            id: "mm",
                            type: "select",
                            classes: n,
                            formControlName: "formControlDate",
                            component: Rn,
                            labelWidth: 41,
                            options: Tn
                          }),
                          Object(Je.jsx)(Vt.a, {
                            label: "Day",
                            name: "dd",
                            id: "dd",
                            type: "select",
                            formControlName: "formControlDate",
                            classes: n,
                            component: Rn,
                            labelWidth: 24,
                            options: Nn(e)
                          }),
                          Object(Je.jsx)(Vt.a, {
                            label: "Year",
                            name: "yyyy",
                            id: "yyyy",
                            type: "select",
                            formControlName: "formControlDate",
                            classes: n,
                            component: Rn,
                            labelWidth: 30,
                            options: In()
                          })
                        ]
                      }),
                      Object(Je.jsxs)(Yt.a, {
                        row: !0,
                        classes: { root: n.formGroup2Col },
                        children: [
                          Object(Je.jsx)(Vt.a, {
                            label: "Monthly Rent",
                            name: "monthlyRent",
                            id: "monthlyRent",
                            type: "number",
                            min: 0.01,
                            step: 0.01,
                            classes: n,
                            component: An,
                            formControlName: "currency",
                            inputProps: { style: { paddingLeft: 15 } },
                            inputLabelProps: { style: { paddingLeft: 15 } },
                            startAdornment: "currency"
                          }),
                          Object(Je.jsx)(Vt.a, {
                            label: "Deposit",
                            name: "deposit",
                            id: "deposit",
                            type: "number",
                            min: 0.01,
                            step: 0.01,
                            classes: n,
                            component: An,
                            formControlName: "currency2",
                            inputProps: { style: { paddingLeft: 15 } },
                            inputLabelProps: { style: { paddingLeft: 15 } },
                            startAdornment: "currency"
                          })
                        ]
                      }),
                      Object(Je.jsxs)(Yt.a, {
                        row: !0,
                        classes: { root: n.formGroup2Col },
                        children: [
                          Object(Je.jsx)(Vt.a, {
                            "data-test": "input-bedrooms",
                            label: "Bedrooms",
                            name: "bedrooms",
                            id: "bedrooms",
                            type: "select",
                            options: ["", "Studio", "1", "2", "3", "4+"],
                            classes: n,
                            labelWidth: 41,
                            component: Rn,
                            formControlName: "flexStatic",
                            inputProps: { style: { paddingLeft: 20 } },
                            inputLabelProps: { style: { paddingLeft: 20 } }
                          }),
                          Object(Je.jsx)(Vt.a, {
                            "data-test": "input-lease-length",
                            label: "Lease Length",
                            name: "leaseLength",
                            id: "leaseLength",
                            min: 1,
                            max: 12,
                            step: 1,
                            classes: n,
                            component: An,
                            twocol: !0,
                            formControlName: "months",
                            inputProps: { style: { paddingRight: 30 } },
                            inputLabelProps: { style: { paddingRight: 30 } },
                            endAdornment: "months"
                          }),
                          Object(Je.jsx)(Vt.a, {
                            label: "Square Ft",
                            name: "squareFt",
                            id: "squareFt",
                            type: "number",
                            min: 0,
                            step: 1,
                            classes: n,
                            component: An
                          })
                        ]
                      }),
                      Object(Je.jsxs)(Yt.a, {
                        row: !0,
                        classes: { root: n.formGroup2Col },
                        children: [
                          Object(Je.jsx)(Vt.a, {
                            label: "Laundry Type",
                            name: "laundryType",
                            id: "laundryType",
                            type: "select",
                            classes: n,
                            component: Rn,
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
                          Object(Je.jsx)(Vt.a, {
                            label: "Parking Type",
                            name: "parkingType",
                            id: "parkingType",
                            type: "select",
                            classes: n,
                            component: Rn,
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
                          Object(Je.jsx)(Vt.a, {
                            label: "Parking Fee / Month",
                            name: "parkingFee",
                            id: "parkingFee",
                            type: "number",
                            min: 0,
                            step: 0.01,
                            classes: n,
                            component: An,
                            formControlName: "parking",
                            inputProps: { style: { paddingLeft: 20 } },
                            inputLabelProps: { style: { paddingLeft: 20 } },
                            startAdornment: "currency"
                          })
                        ]
                      }),
                      Object(Je.jsx)(Qt.a, {
                        className: n.formLabel,
                        component: "legend",
                        children: "Features"
                      }),
                      Object(Je.jsxs)(Yt.a, {
                        row: !0,
                        classes: { root: n.formGroupFeatures },
                        children: [
                          Object(Je.jsx)(Vt.a, {
                            label: "Vacant?",
                            name: "vacant",
                            id: "vacant",
                            type: "checkbox",
                            formControlName: "controlCheckbox",
                            classes: n,
                            component: Un
                          }),
                          i
                        ]
                      }),
                      Object(Je.jsx)(Qt.a, {
                        className: n.formLabel,
                        component: "legend",
                        children: "Additional information about this property"
                      }),
                      Object(Je.jsx)(Vt.a, {
                        label: "Additional information about this property",
                        name: "notes",
                        id: "notes",
                        type: "textarea",
                        formControlName: "notes",
                        classes: n,
                        rows: 5,
                        component: Dn
                      }),
                      Object(Je.jsx)("div", {
                        className: n.buttonWrap,
                        children: Object(Je.jsx)(De.a, {
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
        Fn = Object(p.b)(function(e) {
          return {
            listing: e.listing,
            initialValues: e.listing.form,
            formValues: Object(Wt.a)("addListing")(e) || {},
            submitErrors: Object(Mt.a)("addListing")(e)
          };
        })(Gn),
        Bn = Object(Ne.a)()(Fn),
        Wn = (function(e) {
          Object(h.a)(n, e);
          var t = Object(b.a)(n);
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
                          Tt(
                            "error",
                            e.props.listing.error ||
                              "An error occurred while trying to fetch your listing."
                          );
                      })
                      .catch(function(e) {
                        return Tt("error", e);
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
                  var e = Object(Bt.a)(
                    Ft.a.mark(function e() {
                      var t, n;
                      return Ft.a.wrap(
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
                                  Object(Bt.a)(
                                    Ft.a.mark(function e() {
                                      return Ft.a.wrap(function(e) {
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
                                        jn(
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
                  var e = Object(Bt.a)(
                    Ft.a.mark(function e() {
                      var t, n, a, o, r;
                      return Ft.a.wrap(
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
                                  (a = vn(t)),
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
                  var e = Object(Bt.a)(
                    Ft.a.mark(function e() {
                      var t, n, a;
                      return Ft.a.wrap(
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
                                      return console.error(e), jn(e);
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
                                    jn(this.props.listing.error)
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
                  var e = Object(Bt.a)(
                    Ft.a.mark(function e() {
                      var t, n, a, o;
                      return Ft.a.wrap(
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
                                      return console.error(e), jn(e);
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
                                    jn(this.props.listing.error)
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
                  var e = Object(Bt.a)(
                    Ft.a.mark(function e() {
                      var t = this;
                      return Ft.a.wrap(
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
                                            ? (Tt("success", "Listing updated"),
                                              t.props.history.push("/listings"))
                                            : console.log(e);
                                        })
                                        .catch(function(e) {
                                          console.error(e);
                                        })
                                    : this.addListing()
                                        .then(function(e) {
                                          "ADD_LISTING_SUCCESS" === e
                                            ? (Tt("success", "Listing created"),
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
                  return Object(Je.jsx)("div", {
                    "data-test": "container-add-listing",
                    children: Object(Je.jsx)(
                      Bn,
                      Object(d.a)(
                        Object(d.a)({}, this.props),
                        {},
                        {
                          onSubmit: this.handleSubmit,
                          handleError: jn,
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
        zn = Object(p.b)(
          function(e) {
            return {
              listing: e.listing,
              appState: e.appState,
              profile: e.profile,
              initialValues: e.listing.form,
              formValues: Object(Wt.a)("addListing")(e) || {},
              pristine: Object(zt.a)("addListing")(e),
              submitting: Object($t.a)("addListing")(e),
              valid: Object(Ht.a)("addListing")(e),
              submitErrors: Object(Mt.a)("addListing")(e),
              reset: Zt.a
            };
          },
          function(e) {
            return {
              apiListing: Object(y.b)(r, e),
              apiProfile: Object(y.b)(o, e),
              actions: Object(y.b)(a, e),
              submitForm: function() {
                return e(Object(Zt.b)("addListing"));
              }
            };
          }
        )(Wn),
        $n = Object(x.a)(xn)(zn),
        Hn = n(508),
        Mn = n(230),
        Zn = n.n(Mn),
        Vn = n(229),
        qn = n.n(Vn),
        Qn = n(227),
        Yn = n.n(Qn),
        Jn = n(228),
        Kn = n.n(Jn),
        Xn = n.p + "static/media/apartment.d927d089.png",
        ea = Object(x.a)(function(e) {
          return {
            root: { margin: 20, padding: 20, maxWidth: 1200 },
            tile: { border: "1px solid theme.palette.primary.main" },
            button: Object(g.a)(
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
              "&::before": Object(g.a)(
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
              "&::before": Object(g.a)(
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
            b = n.br4_h,
            g = n.br5_l,
            f = n.br5_h,
            y = n.property_email,
            j = n.property_phone,
            x = n.listing_url,
            O = n.notes,
            S = Ve(i, s, c, l, p, d, u, m, h, b, g, f),
            v = { backgroundImage: "url(".concat(o || Xn, ")") };
          return Object(Je.jsxs)("div", {
            "data-test": "component-listing-tile",
            className: t.tile,
            children: [
              Object(Je.jsxs)("a", {
                href: x,
                rel: "noopener noreferrer",
                target: "_blank",
                className: t.cardAction,
                children: [
                  Object(Je.jsx)(Ae.a, {
                    component: "h2",
                    className: a ? t.titleSmall : t.title,
                    "data-test": "title",
                    children: r
                  }),
                  Object(Je.jsx)("div", {
                    className: a ? t.cardImageSmall : t.cardImage,
                    style: v,
                    "data-test": "image"
                  })
                ]
              }),
              Object(Je.jsxs)("div", {
                className: a ? t.cardListingSmall : t.cardListing,
                "data-test": "card-listing",
                children: [
                  Object(Je.jsx)("div", {
                    className: t.cardRow,
                    children: Object(Je.jsx)(Ae.a, {
                      style: { whiteSpace: "pre-line" },
                      component: "p",
                      className: a ? t.contentLight : t.bodyLight,
                      "data-test": "body",
                      children: S
                    })
                  }),
                  Object(Je.jsx)("div", {
                    className: t.cardRow,
                    children: Object(Je.jsx)(Ae.a, {
                      component: "p",
                      className: a ? t.contentLight : t.bodyLight,
                      "data-test": "body2",
                      children: O
                    })
                  }),
                  Object(Je.jsxs)("div", {
                    className: a ? t.cardFooterSmall : t.cardFooter,
                    children: [
                      Object(Je.jsx)("a", {
                        href: "tel:".concat(j),
                        className: t.phoneLink,
                        children: Object(Je.jsxs)("div", {
                          className: a ? t.cardPhoneSmall : t.cardPhone,
                          children: [
                            Object(Je.jsx)(Yn.a, { className: t.icon }),
                            Object(Je.jsx)(Ae.a, {
                              component: "span",
                              className: a ? t.contentBold : t.body,
                              "data-test": "body",
                              children: j
                            })
                          ]
                        })
                      }),
                      Object(Je.jsx)("a", {
                        href: "mailto:".concat(y),
                        className: t.emailLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: Object(Je.jsxs)("div", {
                          className: t.cardEmail,
                          children: [
                            Object(Je.jsx)(Kn.a, { className: t.icon }),
                            Object(Je.jsx)(Ae.a, {
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
        ta = n(502),
        na = {
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
        aa = { position: "relative", top: "44%" },
        oa = function(e) {
          return Object(Je.jsx)("div", {
            style: na,
            children: Object(Je.jsx)(ta.a, {
              style: aa,
              color: "primary",
              size: 50,
              "data-test": "component-spinner"
            })
          });
        },
        ra = n(503),
        ia = n(507),
        sa = n(504),
        ca = n(505),
        la = n(506),
        pa = Object(x.a)(function(e) {
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
          return Object(Je.jsx)("div", {
            "data-test": "component-alert-dialog",
            children: Object(Je.jsxs)(ra.a, {
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
                  Object(Je.jsx)(sa.a, {
                    id: "alert-dialog-title",
                    "data-test": "dialog-title",
                    children: e.title
                  }),
                Object(Je.jsx)(ca.a, {
                  children: Object(Je.jsx)(la.a, {
                    id: "alert-dialog-description",
                    "data-test": "dialog-listing",
                    children: e.listing
                  })
                }),
                Object(Je.jsxs)(ia.a, {
                  children: [
                    Object(Je.jsx)(De.a, {
                      onClick: e.handleClose,
                      variant: "outlined",
                      color: "default",
                      "data-test": "button-cancel",
                      children: "Cancel"
                    }),
                    Object(Je.jsx)(De.a, {
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
        da = (function(e) {
          Object(h.a)(n, e);
          var t = Object(b.a)(n);
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
                              Tt(
                                "error",
                                e.props.listing.error ||
                                  "An error occured while fetching listing"
                              );
                        })
                        .catch(function(e) {
                          Tt("error", e);
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
                              Tt(
                                "error",
                                a.props.listing.error ||
                                  "An error occured while fetching listings"
                              );
                        })
                        .catch(function(e) {
                          Tt("error", e);
                        });
                }
              },
              {
                key: "deleteListing",
                value: (function() {
                  var e = Object(Bt.a)(
                    Ft.a.mark(function e(t) {
                      var n, a, o, r;
                      return Ft.a.wrap(
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
                                Tt("error", this.props.listing.error),
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
                                  (Tt(
                                    "success",
                                    "Deleted ".concat(t.listing_type, ".")
                                  ),
                                  this.props.apiListing.getAllListing(n)),
                                  (e.next = 18);
                                break;
                              case 17:
                                "DELETE_LISTING_SUCCESS" === a.type &&
                                  (Tt(
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
                  return Object(Je.jsxs)("div", {
                    "data-test": "component-listing-library",
                    className: t.root,
                    children: [
                      this.props.appState.loading && Object(Je.jsx)(oa, {}),
                      this.props.listing.deleteDialogOpen &&
                        Object(Je.jsx)(pa, {
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
                      Object(Je.jsxs)("div", {
                        className: t.section,
                        children: [
                          Object(Je.jsx)(Ae.a, {
                            variant: "h2",
                            align: "center",
                            gutterBottom: !0,
                            className: t.head,
                            style: { paddingTop: 20 },
                            "data-test": "headline",
                            children: "My Listings"
                          }),
                          Object(Je.jsx)("div", {
                            className: t.gridWrapper,
                            children: this.props.listing.userListings.map(
                              function(n) {
                                return Object(Je.jsxs)(
                                  "div",
                                  {
                                    className: t.card,
                                    "data-test": "tile",
                                    children: [
                                      Object(Je.jsxs)("div", {
                                        className: t.actionArea,
                                        children: [
                                          Object(Je.jsx)(Hn.a, {
                                            className: t.buttonDelete,
                                            onClick: function() {
                                              return e.handleDeleteDialogOpen(
                                                n
                                              );
                                            },
                                            color: "primary",
                                            "aria-label": "Delete Listing",
                                            "data-test": "delete",
                                            children: Object(Je.jsx)(qn.a, {})
                                          }),
                                          Object(Je.jsx)(Hn.a, {
                                            className: t.buttonEdit,
                                            onClick: function() {
                                              return e.props.history.push(
                                                "/edit/".concat(n.id)
                                              );
                                            },
                                            color: "primary",
                                            "aria-label": "Edit Listing",
                                            "data-test": "edit",
                                            children: Object(Je.jsx)(Zn.a, {})
                                          })
                                        ]
                                      }),
                                      Object(Je.jsx)(ea, {
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
        ua = Object(p.b)(
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
        )(da),
        ma = Object(f.f)(
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
              gridWrapper: Object(g.a)(
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
                Object(g.a)(t, e.breakpoints.down("md"), { width: "47%" }),
                Object(g.a)(t, e.breakpoints.down("sm"), {
                  width: "100%",
                  margin: "10px 0px"
                }),
                t)
            };
          })(ua)
        ),
        ha = Cn,
        ba = kn,
        ga = Object(qt.a)({
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
          return Object(Je.jsx)("div", {
            "data-test": "component-update-user",
            className: n.sectionContainer,
            children: Object(Je.jsxs)("form", {
              onSubmit: e.handleSubmit(t),
              id: "updateUser",
              className: n.form,
              children: [
                Object(Je.jsx)(Ae.a, {
                  className: n.formTitle,
                  variant: "h3",
                  children: "Property Manager Account Information"
                }),
                Object(Je.jsxs)("div", {
                  className: n.formSection,
                  children: [
                    Object(Je.jsx)(Vt.a, {
                      label: "Your Name",
                      name: "name",
                      id: "name",
                      type: "text",
                      classes: n,
                      component: ba
                    }),
                    Object(Je.jsx)(Vt.a, {
                      label: "Email",
                      name: "email",
                      id: "email",
                      type: "email",
                      classes: n,
                      component: ba
                    }),
                    Object(Je.jsx)(Vt.a, {
                      label: "Phone",
                      name: "phone",
                      id: "phone",
                      type: "tel",
                      classes: n,
                      component: ba
                    }),
                    Object(Je.jsx)(Vt.a, {
                      label: "Company Name",
                      name: "companyName",
                      id: "companyName",
                      type: "text",
                      classes: n,
                      component: ba
                    }),
                    Object(Je.jsx)(Qt.a, {
                      className: n.formLabel,
                      component: "legend",
                      children: "Company Address"
                    }),
                    Object(Je.jsx)(Vt.a, {
                      label: "Street Address or PO Box",
                      name: "companyStreet",
                      id: "companyStreet",
                      type: "text",
                      classes: n,
                      component: ba
                    }),
                    Object(Je.jsxs)(Yt.a, {
                      className: n.formGroup,
                      row: !0,
                      classes: { root: n.formGroup2Col },
                      children: [
                        Object(Je.jsx)(Vt.a, {
                          label: "City",
                          name: "companyCity",
                          id: "companyCity",
                          type: "text",
                          twocol: !0,
                          mobile: !Object(Ne.b)("sm", a),
                          classes: n,
                          component: ba
                        }),
                        Object(Je.jsx)(Vt.a, {
                          label: "State",
                          name: "companyState",
                          id: "companyState",
                          type: "select",
                          short: !0,
                          mobile: !Object(Ne.b)("sm", a),
                          classes: n,
                          component: ha,
                          options: ["", "OR", "WA"],
                          labelWidth: 80
                        }),
                        Object(Je.jsx)(Vt.a, {
                          label: "Zip",
                          name: "companyZip",
                          id: "companyZip",
                          short: !0,
                          mobile: !Object(Ne.b)("sm", a),
                          type: "text",
                          classes: n,
                          component: ba
                        })
                      ]
                    }),
                    Object(Je.jsx)("div", {
                      className: n.buttonWrap,
                      children: Object(Je.jsx)(De.a, {
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
        fa = Object(p.b)(function(e) {
          return {
            profile: e.profile,
            initialValues: e.profile.profile,
            formValues: Object(Wt.a)("updateUser")(e) || {},
            submitErrors: Object(Mt.a)("updateUser")(e)
          };
        })(ga),
        ya = Object(Ne.a)()(fa),
        ja = (function(e) {
          Object(h.a)(n, e);
          var t = Object(b.a)(n);
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
                            ? Tt(
                                "error",
                                e.props.profile.error ||
                                  "An error occurred while trying to fetch your profile."
                              )
                            : console.log(e.props.profile.profile);
                        })
                        .catch(function(e) {
                          return Tt("error", e);
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
                  var e = Object(Bt.a)(
                    Ft.a.mark(function e() {
                      var t, n;
                      return Ft.a.wrap(
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
                                  Object(Bt.a)(
                                    Ft.a.mark(function e() {
                                      return Ft.a.wrap(function(e) {
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
                                        jn(
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
                  var e = Object(Bt.a)(
                    Ft.a.mark(function e() {
                      var t, n;
                      return Ft.a.wrap(
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
                  var e = Object(Bt.a)(
                    Ft.a.mark(function e() {
                      var t, n, a, o;
                      return Ft.a.wrap(
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
                                      return console.error(e), jn(e);
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
                                    jn(this.props.profile.error)
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
                  var e = Object(Bt.a)(
                    Ft.a.mark(function e() {
                      var t = this;
                      return Ft.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                console.log("handleSubmit"),
                                  this.updateProfile()
                                    .then(function(e) {
                                      "UPDATE_PROFILE_SUCCESS" === e
                                        ? (Tt("success", "Profile updated"),
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
                  return Object(Je.jsx)("div", {
                    "data-test": "container-update-user",
                    children: Object(Je.jsx)(
                      ya,
                      Object(d.a)(
                        Object(d.a)({}, this.props),
                        {},
                        {
                          onSubmit: this.handleSubmit,
                          handleError: jn,
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
        xa = Object(p.b)(
          function(e) {
            return {
              listing: e.listing,
              appState: e.appState,
              profile: e.profile,
              initialValues: e.profile.profile,
              formValues: Object(Wt.a)("updateUser")(e) || {},
              pristine: Object(zt.a)("updateUser")(e),
              submitting: Object($t.a)("updateUser")(e),
              valid: Object(Ht.a)("updateUser")(e),
              submitErrors: Object(Mt.a)("updateUser")(e),
              reset: Zt.a
            };
          },
          function(e) {
            return {
              apiListing: Object(y.b)(r, e),
              apiProfile: Object(y.b)(o, e),
              actions: Object(y.b)(a, e),
              submitForm: function() {
                return e(Object(Zt.b)("updateUser"));
              }
            };
          }
        )(ja),
        Oa = Object(x.a)(xn)(xa),
        Sa = n(231),
        va = n.n(Sa),
        _a = n(509),
        wa = En,
        ka = On,
        La = Object(qt.a)({
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
            i = Object.keys(ka).map(function(e) {
              return Object(Je.jsx)(
                Vt.a,
                {
                  label: ka[e],
                  name: e,
                  id: e,
                  type: "checkbox",
                  formControlName: "controlCheckbox",
                  classes: t,
                  component: wa
                },
                e
              );
            });
          return Object(Je.jsx)(_a.a, {
            className: t.drawer,
            "data-test": "component-features-search",
            variant: "permanent",
            classes: { paper: t.drawerPaper },
            open: o,
            onClose: r,
            anchor: "right",
            children: Object(Je.jsxs)("div", {
              className: t.featuresPanel,
              children: [
                Object(Je.jsx)("div", {
                  className: t.formSection,
                  children: Object(Je.jsx)(Qt.a, {
                    className: t.formLabel,
                    component: "legend",
                    children: "Features"
                  })
                }),
                Object(Je.jsxs)(Yt.a, {
                  row: !0,
                  classes: { root: t.formGroupFeatures },
                  children: [
                    Object(Je.jsx)(Vt.a, {
                      label: "Vacant?",
                      name: "vacant",
                      id: "vacant",
                      type: "checkbox",
                      formControlName: "controlCheckbox",
                      classes: t,
                      component: wa
                    }),
                    i
                  ]
                }),
                Object(Je.jsxs)("div", {
                  className: t.buttonWrap,
                  children: [
                    Object(Je.jsx)(De.a, {
                      type: "button",
                      color: "secondary",
                      className: t.leftButton,
                      variant: "outlined",
                      onClick: n,
                      children: "Clear"
                    }),
                    Object(Je.jsx)(De.a, {
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
        Ca = Object(Ne.a)()(La),
        Ea = Cn,
        Ta = kn;
      var Na = Object(qt.a)({
          form: "listingSearch",
          destroyOnUnmount: !1,
          forceUnregisterOnUnmount: !1,
          enableReinitialize: !0,
          keepDirtyOnReinitialize: !0,
          updateUnregisteredFields: !0
        })(function(e) {
          var t = e.onSubmit,
            n = e.classes;
          return Object(Je.jsx)("div", {
            className: n.searchBar,
            "data-test": "component-search-bar",
            children: Object(Je.jsxs)("form", {
              className: n.searchForm,
              onSubmit: e.handleSubmit(t),
              id: "listingSearch",
              children: [
                Object(Je.jsx)(Ue.a, {
                  "aria-label": "close",
                  className: n.closeButton,
                  size: "small",
                  onClick: e.hideSearch,
                  children: Object(Je.jsx)(dt.a, { fontSize: "inherit" })
                }),
                Object(Je.jsx)(Vt.a, {
                  label: "Zip code",
                  name: "searchZip",
                  id: "searchZip",
                  type: "text",
                  classes: n,
                  formControlName: "searchZip",
                  component: Ta
                }),
                Object(Je.jsx)(Vt.a, {
                  "data-test": "input-bedrooms",
                  label: "Bedrooms",
                  name: "bedrooms",
                  id: "bedrooms",
                  type: "select",
                  options: ["", "Studio", "1", "2", "3", "4", "5"],
                  classes: n,
                  labelWidth: 41,
                  component: Ea,
                  formControlName: "searchBedrooms",
                  inputProps: { style: { paddingLeft: 20 } },
                  inputLabelProps: { style: { paddingLeft: 20 } }
                }),
                Object(Je.jsx)(Vt.a, {
                  label: "Max Rent",
                  name: "maxRent",
                  id: "maxRent",
                  type: "number",
                  min: 0.01,
                  step: 0.01,
                  classes: n,
                  component: Ta,
                  formControlName: "maxRent",
                  inputProps: {
                    style: { paddingLeft: 15, textAlign: "right" }
                  },
                  inputLabelProps: { style: { paddingLeft: 15 } },
                  startAdornment: "currency"
                }),
                Object(Je.jsx)(De.a, {
                  type: "button",
                  color: "secondary",
                  className: n.moreButton,
                  variant: "outlined",
                  onClick: e.toggleMore,
                  children: "More"
                }),
                Object(Je.jsx)(De.a, {
                  type: "submit",
                  color: "primary",
                  className: n.searchButton,
                  variant: "contained",
                  onClick: e.search,
                  children: "Search"
                }),
                Object(Je.jsx)(De.a, {
                  type: "button",
                  color: "secondary",
                  className: n.clearButton,
                  variant: "outlined",
                  onClick: e.clearSearch,
                  children: "Reset Filters"
                }),
                e.more &&
                  Object(Je.jsx)(Ca, {
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
        Ia = Object(p.b)(function(e) {
          return {
            listing: e.listing,
            initialValues: e.listing.search,
            formValues: Object(Wt.a)("listingSearch")(e) || {},
            submitErrors: Object(Mt.a)("listingSearch")(e)
          };
        })(Na),
        Ra = Object(Ne.a)()(Ia),
        Aa = n(518),
        Da = n(232),
        Ua = n.n(Da),
        Pa = function(e) {
          return Object(Je.jsx)("div", {
            "data-test": "component-map-marker",
            className: e.classes.mapMarker,
            children: Object(Je.jsx)(Ga, {
              title: Object(Je.jsx)("div", {
                className: e.classes.markerCard,
                children: Object(Je.jsx)(ea, {
                  listingTile: e.listing,
                  small: !0
                })
              }),
              children: Object(Je.jsx)(Ua.a, { className: e.classes.mapIcon })
            })
          });
        },
        Ga = Object(x.a)(function(e) {
          return {
            tooltip: {
              backgroundColor: "white",
              color: "rgba(0, 0, 0, 0.87)",
              fontSize: e.typography.pxToRem(12)
            }
          };
        })(function(e) {
          return Object(Je.jsx)(Aa.a, Object(d.a)({ interactive: !0 }, e));
        }),
        Fa = (function(e) {
          Object(h.a)(n, e);
          var t = Object(b.a)(n);
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
                        Tt(
                          "error",
                          a.props.listing.error ||
                            "An error occured while fetching listings"
                        ));
                  })
                  .catch(function(e) {
                    Tt("error", e), console.log(e);
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
                    features: vn(e),
                    property_zip: e.searchZip,
                    bedrooms: e.bedrooms,
                    max_rent: e.maxRent
                  },
                  n = (function(e, t) {
                    console.log("filterListings"),
                      console.log(e),
                      console.log(t);
                    var n = Object(Jt.a)(e);
                    if (
                      (t.max_rent &&
                        (console.log(
                          "max_rent: ".concat(parseFloat(t.max_rent))
                        ),
                        (n = n.filter(function(e) {
                          console.log("bedroomsPriceObj:", e.bedroomsPriceObj);
                          var n = [];
                          return (
                            e.bedroomsPriceObj.map(function(e) {
                              return e.l && n.push(e.l), null;
                            }),
                            console.log(n),
                            n.sort(function(e, t) {
                              return e - t;
                            }),
                            console.log(n),
                            parseFloat(n[0]) <= parseFloat(t.max_rent)
                          );
                        }))),
                      console.log("filteredListings after maxRent filter", n),
                      !n.length)
                    )
                      return [];
                    if (t.bedrooms) {
                      console.log("bedrooms: ".concat(t.bedrooms));
                      var a = function(e) {
                        var t = [];
                        Object.keys(e.bedroomsPriceObj).map(function(n) {
                          null !== e.bedroomsPriceObj[n].l && t.push(n);
                        }),
                          console.log(t);
                        var n = [];
                        return (
                          t.map(function(e) {
                            return (
                              "studio" === e
                                ? n.push(e)
                                : n.push(parseFloat(e.substring(2, 3))),
                              null
                            );
                          }),
                          n
                        );
                      };
                      n = n.filter(function(e) {
                        return (
                          console.log(a(e)),
                          console.log(t.bedrooms, parseFloat(t.bedrooms)),
                          a(e).includes(parseFloat(t.bedrooms)) ||
                          a(e).includes(t.bedrooms.toString())
                            ? (console.log("true"), console.log(e), e)
                            : (console.log("false"), null)
                        );
                      });
                    }
                    if (
                      (console.log("filteredListings after bedrooms filter", n),
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
                      var o = Object(Jt.a)(n);
                      n.forEach(function(e) {
                        t.features.forEach(function(t, n) {
                          e.features.includes(t) ||
                            (console.log(
                              ""
                                .concat(e.property_name, " doesn't match ")
                                .concat(t)
                            ),
                            o.splice(n, 1));
                        });
                      }),
                        (n = Object(Jt.a)(o));
                    }
                    return (
                      console.log("filteredListings after features filter", n),
                      n.length ? n : []
                    );
                  })(a.props.listing.allListings, t);
                console.log(n),
                  a.props.apiListing.updateFilter(n),
                  n.length ||
                    Tt(
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
                  this.getAllListings();
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.listing.filteredListings.map(function(t) {
                      return Object(Je.jsx)(
                        Pa,
                        {
                          listing: t,
                          lat: t.property_lat,
                          lng: t.property_lon,
                          classes: e.props.classes
                        },
                        t.id
                      );
                    });
                  return Object(Je.jsxs)("div", {
                    className: this.props.classes.mapContainer,
                    style: { height: "100vh", width: "100%" },
                    children: [
                      this.state.search &&
                        Object(Je.jsx)(Ra, {
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
                      Object(Je.jsx)(va.a, {
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
      Fa.defaultProps = { center: { lat: 45.5051, lng: -122.675 }, zoom: 12 };
      var Ba = Object(p.b)(
          function(e) {
            return {
              appState: e.appState,
              profile: e.profile,
              listing: e.listing,
              formValues: Object(Wt.a)("listingSearch")(e) || {}
            };
          },
          function(e) {
            return { apiListing: Object(y.b)(r, e) };
          }
        )(Fa),
        Wa = Object(x.a)(function(e) {
          var t;
          return {
            root: {},
            markerCard: Object(g.a)(
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
            mapContainer: Object(g.a)(
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
            searchForm: Object(g.a)(
              { display: "flex", flexDirection: "row", height: 55 },
              e.breakpoints.down("sm"),
              {
                flexWrap: "wrap",
                justifyContent: "space-between",
                height: 240,
                paddingTop: 10
              }
            ),
            searchZip: Object(g.a)(
              { maxWidth: 200, marginRight: 20 },
              e.breakpoints.down("sm"),
              {
                maxWidth: "46%",
                marginBottom: "15px !important",
                marginRight: 0
              }
            ),
            searchBedrooms: Object(g.a)(
              { minWidth: 150, marginRight: 20 },
              e.breakpoints.down("sm"),
              { width: "46%", marginBottom: "15px !important", marginRight: 0 }
            ),
            maxRent: Object(g.a)(
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
            currency: Object(g.a)(
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
            bedrooms: Object(g.a)(
              { width: 120, marginRight: 20, position: "relative" },
              e.breakpoints.down("sm"),
              { width: "46%", marginBottom: 10, marginRight: 0 }
            ),
            moreButton: Object(g.a)(
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
            searchButton: Object(g.a)(
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
              Object(g.a)(t, e.breakpoints.down("sm"), { maxWidth: "100%" }),
              Object(g.a)(t, "position", "absolute"),
              Object(g.a)(t, "right", 0),
              Object(g.a)(t, "top", 0),
              Object(g.a)(t, "backgroundColor", "white"),
              Object(g.a)(t, "padding", 20),
              Object(g.a)(t, "minHeight", "100vh"),
              t),
            drawerPaper: Object(g.a)(
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
            closeButton: Object(g.a)(
              { display: "none" },
              e.breakpoints.down("sm"),
              { display: "block", position: "absolute", top: 5, right: 5 }
            ),
            clearButton: Object(g.a)(
              { marginLeft: 20, borderRadius: 4 },
              e.breakpoints.down("sm"),
              { marginTop: 10, marginLeft: 0, width: "100%" }
            )
          };
        })(Ba),
        za = n(234),
        $a = n.n(za),
        Ha = (function(e) {
          Object(h.a)(n, e);
          var t = Object(b.a)(n);
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
                  var e = $a.a.parse(this.props.location.search);
                  e.message &&
                    this.setState({ message: decodeURIComponent(e.message) });
                }
              },
              {
                key: "render",
                value: function() {
                  return Object(Je.jsxs)("div", {
                    className: this.props.classes.message,
                    "data-test": "component-no-access",
                    children: [
                      Object(Je.jsxs)("p", {
                        children: [
                          this.props.message
                            ? this.props.message
                            : this.state.message,
                          Object(Je.jsx)("br", {})
                        ]
                      }),
                      Object(Je.jsx)("div", {
                        className: this.props.classes.buttonWrap,
                        children: Object(Je.jsx)(De.a, {
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
        Ma = Object(f.f)(Ha),
        Za = n.p + "static/media/hero_keys_1920x1080.2473bb39.jpg",
        Va = (function(e) {
          Object(h.a)(n, e);
          var t = Object(b.a)(n);
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
                  return Object(Je.jsxs)("div", {
                    "data-test": "component-app",
                    className: t.appRoot,
                    children: [
                      Object(Je.jsx)(j.a, {}),
                      Object(Je.jsx)(Xe, { main_ref: this.main_ref }),
                      Object(Je.jsx)(Nt, {}),
                      this.props.appState.loading && Object(Je.jsx)(oa, {}),
                      Object(Je.jsx)("main", {
                        className: t.container,
                        id: "main",
                        ref: this.main_ref,
                        children: Object(Je.jsxs)(f.c, {
                          children: [
                            Object(Je.jsx)(f.a, {
                              exact: !0,
                              path: "/",
                              render: function(t) {
                                return Object(Je.jsx)(
                                  nt,
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
                            Object(Je.jsx)(f.a, {
                              path: "/admin/:id?/:token?",
                              render: function(e) {
                                return Object(Je.jsx)(Pt, Object(d.a)({}, e));
                              }
                            }),
                            Object(Je.jsx)(f.a, {
                              path: "/new",
                              render: function(t) {
                                return n && a
                                  ? Object(Je.jsx)(
                                      $n,
                                      Object(d.a)(
                                        { setRedirect: e.setRedirect },
                                        t
                                      )
                                    )
                                  : Object(Je.jsx)(
                                      Ma,
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
                            Object(Je.jsx)(f.a, {
                              path: "/map",
                              render: function(t) {
                                return Object(Je.jsx)(
                                  Wa,
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
                            Object(Je.jsx)(f.a, {
                              path: "/user/:id",
                              render: function(t) {
                                return Object(Je.jsx)(
                                  Oa,
                                  Object(d.a)({ setRedirect: e.setRedirect }, t)
                                );
                              }
                            }),
                            Object(Je.jsx)(f.a, {
                              path: "/edit/:id",
                              render: function(t) {
                                return Object(Je.jsx)(
                                  $n,
                                  Object(d.a)(
                                    { edit: !0, setRedirect: e.setRedirect },
                                    t
                                  )
                                );
                              }
                            }),
                            Object(Je.jsx)(f.a, {
                              path: "/listings",
                              render: function(t) {
                                return Object(Je.jsx)(
                                  ma,
                                  Object(d.a)({ setRedirect: e.setRedirect }, t)
                                );
                              }
                            }),
                            Object(Je.jsx)(f.a, {
                              path: "/logout",
                              render: function(t) {
                                return Object(Je.jsx)(
                                  it,
                                  Object(d.a)({ classes: e.props.classes }, t)
                                );
                              }
                            }),
                            Object(Je.jsx)(f.a, {
                              path: "/login",
                              render: function(t) {
                                return Object(Je.jsx)(
                                  ot,
                                  Object(d.a)({ classes: e.props.classes }, t)
                                );
                              }
                            }),
                            Object(Je.jsx)(f.a, {
                              path: "*",
                              render: function(t) {
                                return Object(Je.jsx)(
                                  tt,
                                  Object(d.a)({ classes: e.props.classes }, t)
                                );
                              }
                            })
                          ]
                        })
                      }),
                      Object(Je.jsx)(et, { classes: this.props.classes })
                    ]
                  });
                }
              }
            ]),
            n
          );
        })(i.Component),
        qa = Object(p.b)(
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
        )(Va),
        Qa = Object(x.a)(function(e) {
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
            appRoot: Object(g.a)(
              {
                width: "100vw",
                height: "100%",
                minHeight: "80vh",
                backgroundImage: 'url("'.concat(Za, '")'),
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
              Object(g.a)(t, e.breakpoints.down("sm"), {
                width: "100%",
                height: "100%"
              }),
              Object(g.a)(t, "lineHeight", "2em"),
              Object(g.a)(t, "background", "white"),
              Object(g.a)(t, "borderRadius", "4px"),
              Object(g.a)(t, "padding", 60),
              Object(g.a)(t, "fontSize", "1.2em"),
              t),
            row: Object(g.a)(
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
              Object(g.a)(n, e.breakpoints.down("sm"), { marginTop: 5 }),
              Object(g.a)(n, "fill", e.palette.secondary.main),
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
            heroHead: Object(g.a)(
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
            heroSubhead: Object(g.a)(
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
        })(Object(f.f)(qa)),
        Ya = n(196),
        Ja = n(25),
        Ka = n.n(Ja),
        Xa = {
          loggedIn: !1,
          authToken: "",
          loading: !1,
          redirect: "",
          userId: null
        };
      var eo = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Xa,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case O:
              return Xa;
            case v:
            case J:
            case ee:
            case ue:
            case le:
            case ae:
            case N:
            case A:
              return Ka()(e, { loading: { $set: !0 } });
            case I:
              return Ka()(e, {
                loggedIn: { $set: !0 },
                authToken: { $set: t.payload.token },
                loading: { $set: !1 }
              });
            case R:
              return Ka()(e, { loggedIn: { $set: !1 }, loading: { $set: !1 } });
            case _:
              return Ka()(e, { redirect: { $set: t.payload } });
            case S:
              return Ka()(e, {
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
              return Ka()(e, { loading: { $set: !1 } });
            default:
              return e;
          }
        },
        to = {
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
            case A:
            case P:
              return Ka()(t, { error: { $set: null } });
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
              return Ka()(t, {
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
                Ka()(t, { error: { $set: e } })
              );
            default:
              return t;
          }
        },
        ao = {
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
            searchZip: "97206",
            features: []
          },
          error: null
        };
      var oo = function() {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ao,
            n = arguments.length > 1 ? arguments[1] : void 0;
          switch (n.type) {
            case O:
              return ao;
            case $:
              return Ka()(t, {
                form: Object(g.a)({}, n.payload.name, { $set: n.payload.value })
              });
            case H:
              return Ka()(t, {
                search: Object(g.a)({}, n.payload.name, {
                  $set: n.payload.value
                })
              });
            case M:
              return Ka()(t, {
                deleteDialogOpen: { $set: !0 },
                currentListing: {
                  $set: Object(d.a)({}, n.payload.selectedListing)
                }
              });
            case Z:
            case pe:
              return Ka()(t, {
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
              return console.log("clear form"), Ka()(t, { form: { $set: {} } });
            case q:
              return (
                console.log("clear search"), Ka()(t, { search: { $set: {} } })
              );
            case Q:
              return (
                console.log("clear features"),
                Ka()(t, { search: { features: { $set: [] } } })
              );
            case Y:
              return (
                console.log("UPDATE_FILTER"),
                console.log(n.payload),
                Ka()(t, { filteredListings: { $set: Object(Jt.a)(n.payload) } })
              );
            case J:
            case ee:
            case ue:
            case le:
            case ae:
            case ie:
              return Ka()(t, { error: { $set: null } });
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
                  bedroomsPriceObj: qe(
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
              return Ka()(t, { form: { $set: r }, error: { $set: null } });
            case oe:
              return Ka()(t, {
                allListings: { $set: Qe(n.payload) },
                filteredListings: { $set: n.payload },
                error: { $set: null }
              });
            case se:
              return Ka()(t, {
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
                Ka()(t, { error: { $set: e } })
              );
            default:
              return t;
          }
        },
        ro = Object(y.c)({
          appState: eo,
          profile: no,
          listing: oo,
          form: Ya.a
        }),
        io = Object(y.a)(E.apiMiddleware),
        so = [E.apiMiddleware],
        co =
          (y.a.apply(void 0, so)(y.e),
          Object(y.e)(
            ro,
            Object(y.d)(
              io,
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
      var lo = n(511),
        po = n(235),
        uo = n(153),
        mo = n.n(uo),
        ho = {
          palette: {
            primary: {
              main: "rgb(0, 170, 164)",
              light: "rgb(120, 192, 75)",
              contrastText: "white"
            },
            secondary: { main: "#c77137", light: "#d3a900" },
            danger: { main: mo.a[900], light: mo.a[700] },
            success: { main: mt.a[600], light: mt.a[400] },
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
        bo = Object(po.a)(ho),
        go = (function(e) {
          Object(h.a)(n, e);
          var t = Object(b.a)(n);
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
        fo = Object(f.f)(go);
      Object(c.render)(
        Object(Je.jsx)(p.a, {
          store: co,
          children: Object(Je.jsx)(l.a, {
            children: Object(Je.jsx)(fo, {
              children: Object(Je.jsx)(lo.a, {
                theme: bo,
                children: Object(Je.jsx)(Qa, {})
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
//# sourceMappingURL=main.f7dbc0a9.chunk.js.map
