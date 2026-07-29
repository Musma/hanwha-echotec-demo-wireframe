/* @ds-bundle: {"format":4,"namespace":"TwinDesignSystem_fa3c4f","components":[{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"KpiCard","sourcePath":"components/data/Card.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"StatusBadge","sourcePath":"components/data/StatusBadge.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"BottomSheet","sourcePath":"components/feedback/BottomSheet.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"MonthGrid","sourcePath":"components/forms/DatePicker.jsx"},{"name":"CalendarPanel","sourcePath":"components/forms/DatePicker.jsx"},{"name":"DatePicker","sourcePath":"components/forms/DatePicker.jsx"},{"name":"DateRangePicker","sourcePath":"components/forms/DateRangePicker.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Popover","sourcePath":"components/forms/Popover.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"NotificationBadge","sourcePath":"components/navigation/NotificationBadge.jsx"}],"sourceHashes":{"components/data/Card.jsx":"4cea3e7ecbcf","components/data/Pagination.jsx":"2fb2bdcd99f5","components/data/StatusBadge.jsx":"d64187a839fd","components/data/Table.jsx":"c0609c34987d","components/feedback/BottomSheet.jsx":"9ea9e75a2aca","components/feedback/Modal.jsx":"3d44fcbc2a1b","components/feedback/Toast.jsx":"48f455607153","components/feedback/Tooltip.jsx":"684e672a8b38","components/forms/Button.jsx":"5b527c29d47e","components/forms/Checkbox.jsx":"7ab541e2e38b","components/forms/DatePicker.jsx":"29602d826338","components/forms/DateRangePicker.jsx":"7dc4577982ae","components/forms/IconButton.jsx":"29004f5054db","components/forms/Input.jsx":"506949eaa0c1","components/forms/Popover.jsx":"811a91f4928e","components/forms/Radio.jsx":"c980a82a61f3","components/forms/Select.jsx":"4dd163da2d69","components/navigation/Breadcrumb.jsx":"3b348edc47f1","components/navigation/NotificationBadge.jsx":"fae67126c12d","ui_kits/mobile-app/MobileChrome.jsx":"116ae5cbde94","ui_kits/mobile-app/MobileScreens.jsx":"98c1a585a160","ui_kits/web-admin/AppShell.jsx":"771442920ae1","ui_kits/web-admin/DashboardScreen.jsx":"3fc2f9bb0193","ui_kits/web-admin/JibunScreen.jsx":"19cc6299018e","ui_kits/web-admin/LoginScreen.jsx":"dd60a91b5976"},"inlinedExternals":[],"unexposedExports":[{"name":"fieldMetrics","sourcePath":"components/forms/DatePicker.jsx"},{"name":"fmtDate","sourcePath":"components/forms/DatePicker.jsx"}]} */

(() => {

const __ds_ns = (window.TwinDesignSystem_fa3c4f = window.TwinDesignSystem_fa3c4f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — flat hairline surface. DESIGN §5-7 / §6-6.
 * 1px Border/Default, radius 12px (mobile) / 6px (web). No shadow.
 */
function Card({
  children,
  padding = "var(--space-4)",
  web = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface)",
      border: "1px solid var(--border-default)",
      borderRadius: web ? "var(--radius-btn)" : "var(--radius-md)",
      padding,
      ...style
    }
  }, rest), children);
}

/**
 * KpiCard — dashboard metric. Label (C1) on top, value (H3) below.
 */
function KpiCard({
  label,
  value,
  unit,
  caption,
  accent,
  web = true,
  style
}) {
  return /*#__PURE__*/React.createElement(Card, {
    web: web,
    style: {
      minHeight: 88,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "var(--space-3)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-1)",
      font: "var(--c1-weight) var(--c1-size)/var(--c1-line) var(--font-primary)",
      color: "var(--text-tertiary)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hg-num",
    style: {
      font: "700 var(--h3-size)/var(--h3-line) var(--font-primary)",
      letterSpacing: "var(--h3-spacing)",
      color: accent || "var(--text-primary)"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--h6-weight) var(--h6-size)/1 var(--font-primary)",
      color: "var(--text-secondary)"
    }
  }, unit)), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--c1-weight) var(--c1-size)/var(--c1-line) var(--font-primary)",
      color: "var(--text-tertiary)"
    }
  }, caption));
}
Object.assign(__ds_scope, { Card, KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
/**
 * Pagination — ‹ 1 2 3 › . DESIGN §6-5. Active page = Brand/Primary.
 */
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style
}) {
  const go = p => {
    if (p >= 1 && p <= total && onChange) onChange(p);
  };
  const pages = [];
  const start = Math.max(1, Math.min(page - 2, total - 4));
  const end = Math.min(total, start + 4);
  for (let i = start; i <= end; i++) pages.push(i);
  const arrow = (dir, dis) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: dis,
    onClick: () => go(dir === "prev" ? page - 1 : page + 1),
    style: {
      width: 32,
      height: 32,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      background: "transparent",
      cursor: dis ? "default" : "pointer",
      color: dis ? "var(--border-strong)" : "var(--text-tertiary)",
      borderRadius: "var(--radius-input)"
    }
  }, dir === "prev" ? "‹" : "›");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      font: "var(--b3-weight) var(--b3-size)/1 var(--font-primary)",
      ...style
    }
  }, arrow("prev", page <= 1), pages.map(p => {
    const active = p === page;
    return /*#__PURE__*/React.createElement("button", {
      key: p,
      type: "button",
      onClick: () => go(p),
      className: "hg-num",
      style: {
        minWidth: 32,
        height: 32,
        padding: "0 6px",
        border: "none",
        cursor: "pointer",
        borderRadius: "var(--radius-input)",
        background: active ? "var(--brand-primary)" : "transparent",
        color: active ? "var(--on-brand)" : "var(--text-tertiary)",
        fontWeight: active ? 400 : 400,
        font: "inherit"
      }
    }, p);
  }), arrow("next", page >= total));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusBadge.jsx
try { (() => {
const MAP = {
  wait: {
    text: "var(--status-wait-text)",
    bg: "var(--status-wait-bg)"
  },
  progress: {
    text: "var(--status-progress-text)",
    bg: "var(--status-progress-bg)"
  },
  done: {
    text: "var(--status-done-text)",
    bg: "var(--status-done-bg)"
  },
  error: {
    text: "var(--status-error-text)",
    bg: "var(--status-error-bg)"
  },
  hold: {
    text: "var(--status-hold-text)",
    bg: "var(--status-hold-bg)"
  }
};

/**
 * StatusBadge — pill status marker. DESIGN §3-4 / §6-7.
 * Always shows text label (color + text, never color alone).
 */
function StatusBadge({
  status = "wait",
  children,
  style
}) {
  const c = MAP[status] || MAP.wait;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 22,
      padding: "0 var(--space-2)",
      borderRadius: "var(--radius-full)",
      background: c.bg,
      color: c.text,
      font: "400 var(--c1-size)/1 var(--font-primary)",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
/**
 * Table — web data table. DESIGN §6-5 (PPT 확정).
 * Header bg #EEEEEE, row 46px, header S2, cells B3. Columns: {key,label,align,width}.
 */
function Table({
  columns = [],
  rows = [],
  keyField = "id",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-btn)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      tableLayout: "auto"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--table-header-bg)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.headerAlign || c.align || "left",
      width: c.width,
      padding: "10px 9px",
      font: "var(--s2-weight) var(--s2-size)/var(--s2-line) var(--font-primary)",
      color: "var(--text-primary)",
      whiteSpace: "nowrap",
      borderRight: "1px solid var(--hanwha-white-lighter)"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r[keyField] ?? i,
    style: {
      background: "var(--surface)",
      borderTop: "1px solid var(--hanwha-white-darker)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: c.numeric ? "hg-num" : undefined,
    style: {
      textAlign: c.align || (c.numeric ? "right" : "left"),
      padding: "12px 9px",
      font: "var(--b3-weight) var(--b3-size)/var(--b3-line) var(--font-primary)",
      color: "var(--text-secondary)",
      borderRight: "1px solid var(--hanwha-white-lighter)"
    }
  }, c.render ? c.render(r[c.key], r) : r[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/BottomSheet.jsx
try { (() => {
/**
 * BottomSheet — mobile option/filter/detail sheet. DESIGN §6-9.
 * Top radius 20px, grab bar, dim 0.6, slide-up 240ms.
 */
function BottomSheet({
  open = true,
  title,
  subtitle,
  children,
  cta,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--overlay-dim)",
      display: "flex",
      alignItems: "flex-end",
      zIndex: 1000
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      background: "var(--surface)",
      borderRadius: "var(--radius-sheet) var(--radius-sheet) 0 0",
      animation: "twinSheetIn 240ms cubic-bezier(0.16,1,0.3,1)",
      maxHeight: "80vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "8px 0 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 4,
      borderRadius: "var(--radius-full)",
      background: "var(--border-strong)"
    }
  })), (title || subtitle) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--h5-weight) var(--h5-size)/var(--h5-line) var(--font-primary)",
      color: "var(--text-primary)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--c1-weight) var(--c1-size)/var(--c1-line) var(--font-primary)",
      color: "var(--text-tertiary)"
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-5)",
      overflowY: "auto",
      flex: 1
    }
  }, children), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--space-5) var(--space-6)"
    }
  }, cta), /*#__PURE__*/React.createElement("style", null, `@keyframes twinSheetIn{from{transform:translateY(100%)}to{transform:translateY(0)}}`)));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const ICONS = {
  success: {
    color: "var(--hanwha-green-light)",
    path: "M5 13l4 4L19 7"
  },
  error: {
    color: "var(--hanwha-red-light)",
    path: "M18 6L6 18M6 6l12 12"
  },
  info: {
    color: "var(--hanwha-blue-main)",
    path: "M12 8h.01M11 12h1v4h1"
  }
};

/**
 * Toast — result feedback. DESIGN §6-10.
 * Dark bg #1D1F21, white text, radius 12px, icon + message.
 */
function Toast({
  type = "success",
  children,
  style
}) {
  const ic = ICONS[type] || ICONS.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      background: "var(--hanwha-gray-darker)",
      color: "#ffffff",
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      font: "var(--b3-weight) var(--b3-size)/var(--b3-line) var(--font-primary)",
      maxWidth: 360,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: ic.color,
    strokeWidth: "2",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: ic.path,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Tooltip — brief supplementary text on hover/tap. DESIGN §6-11.
 * shadow 0 2px 8px rgba(54,59,64,0.25) (PPT 확정), radius 4px.
 */
function Tooltip({
  label,
  children,
  placement = "top",
  disabled = false,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && !disabled && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos[placement],
      zIndex: 900,
      background: "var(--surface)",
      color: "var(--text-secondary)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-tooltip)",
      borderRadius: "var(--radius-input)",
      padding: "6px 10px",
      maxWidth: 240,
      width: "max-content",
      font: "var(--c1-weight) var(--c1-size)/var(--c1-line) var(--font-primary)",
      pointerEvents: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — 한화오션에코텍 물류Twin primary action control.
 * 디자인가이드 V0.1 slide 10. Radius 6px. States: default #ED7100 /
 * hover #EFAA6B / pressed #D15700 / disabled #BEBEBE. Semantic tokens only.
 */
function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  leadingIcon = null,
  trailingIcon = null,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  // Guide heights: Big 32 · Medium 28 · Small 24 (web). cta 48 = mobile fixed CTA.
  const sizes = {
    cta: {
      height: "var(--btn-h-cta)",
      padding: "0 var(--space-5)",
      fontSize: "var(--button1-size)",
      lineHeight: "var(--button1-line)"
    },
    // 48
    big: {
      height: "32px",
      padding: "0 var(--space-4)",
      fontSize: "var(--button2-size)",
      lineHeight: "var(--button2-line)"
    },
    medium: {
      height: "28px",
      padding: "0 var(--space-3)",
      fontSize: "var(--button2-size)",
      lineHeight: "var(--button2-line)"
    },
    small: {
      height: "24px",
      padding: "0 var(--space-2)",
      fontSize: "var(--body2-size)",
      lineHeight: "var(--body2-line)"
    },
    // legacy aliases
    m: {
      height: "32px",
      padding: "0 var(--space-4)",
      fontSize: "var(--button2-size)",
      lineHeight: "var(--button2-line)"
    },
    s: {
      height: "24px",
      padding: "0 var(--space-2)",
      fontSize: "var(--body2-size)",
      lineHeight: "var(--body2-line)"
    }
  };

  // Active orange step by interaction (default → hover → pressed).
  const orange = disabled ? "var(--surface-disabled)" : press ? "var(--brand-pressed)" : hover ? "var(--brand-hover)" : "var(--brand-primary)";
  const orangeInk = disabled ? "var(--surface-disabled)" : press ? "var(--brand-pressed)" : hover ? "var(--brand-hover)" : "var(--brand-primary)";
  const variants = {
    primary: {
      background: orange,
      color: disabled ? "#ffffff" : "var(--on-brand)",
      border: "1px solid transparent"
    },
    secondary: {
      background: hover && !disabled ? "var(--brand-tint)" : "var(--surface)",
      color: disabled ? "var(--surface-disabled)" : orangeInk,
      border: `1px solid ${disabled ? "var(--surface-disabled)" : orangeInk}`
    },
    tertiary: {
      background: "var(--surface)",
      color: disabled ? "var(--text-placeholder)" : "var(--text-secondary)",
      border: "1px solid var(--border-input)"
    },
    danger: {
      background: disabled ? "var(--surface-disabled)" : "var(--hanwha-red-main)",
      color: disabled ? "var(--text-tertiary)" : "#ffffff",
      border: "1px solid transparent"
    },
    text: {
      background: "transparent",
      color: disabled ? "var(--text-placeholder)" : "var(--brand-primary)",
      border: "1px solid transparent"
    }
  };
  const s = sizes[size] || sizes.medium;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      width: fullWidth ? "100%" : "auto",
      borderRadius: "var(--radius-btn)",
      fontFamily: "var(--font-content)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      whiteSpace: "nowrap",
      ...s,
      ...v,
      ...style
    }
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/**
 * Modal — confirmation dialog. DESIGN §6-8 (PPT 확정).
 * Radius 6px, overlay rgba(0,0,0,0.6), footer buttons center-aligned.
 * Close only via footer buttons (오조작 방지) — no X.
 */
function Modal({
  open = true,
  title,
  children,
  confirmLabel = "확인",
  cancelLabel = "취소",
  danger = false,
  onConfirm,
  onCancel
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--overlay-dim)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 342,
      background: "var(--surface)",
      borderRadius: "var(--radius-btn)",
      overflow: "hidden",
      animation: "twinModalIn 180ms cubic-bezier(0.16,1,0.3,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6) var(--space-6) var(--space-2)",
      font: "var(--h5-weight) var(--h5-size)/var(--h5-line) var(--font-primary)",
      letterSpacing: "var(--h5-spacing)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-6) var(--space-6)",
      font: "var(--b3-weight) var(--b3-size)/var(--b3-line) var(--font-primary)",
      color: "var(--text-secondary)"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "var(--space-2)",
      padding: "0 var(--space-6) var(--space-6)"
    }
  }, onCancel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "tertiary",
    size: "m",
    onClick: onCancel,
    style: {
      flex: 1
    }
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: danger ? "danger" : "primary",
    size: "m",
    onClick: onConfirm,
    style: {
      flex: 1
    }
  }, confirmLabel))), /*#__PURE__*/React.createElement("style", null, `@keyframes twinModalIn{from{opacity:0;transform:scale(0.96)}to{opacity:1;transform:scale(1)}}`));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Checkbox — 24×24, radius 50% (circular, per PPT 확정). DESIGN §6-4.
 * States: unchecked / checked / disabled. Checked = orange bg + white check.
 */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style,
  size
}) {
  const sz = size || "var(--checkbox-size)";
  const fieldId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fieldId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: sz,
      height: sz,
      borderRadius: "50%",
      flexShrink: 0,
      background: disabled ? "var(--surface-disabled)" : checked ? "var(--brand-primary)" : "var(--surface)",
      border: checked ? "1.5px solid var(--brand-primary)" : `1.5px solid ${disabled ? "var(--border-default)" : "var(--border-input)"}`,
      transition: "background var(--dur-fast), border-color var(--dur-fast)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#ffffff",
    strokeWidth: "3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--b3-weight) var(--b3-size)/var(--b3-line) var(--font-primary)",
      color: disabled ? "var(--text-tertiary)" : "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — 아이콘 전용 고스트 버튼 (헤더 토글, 로그아웃, 알림, 새로고침 등).
 * 기본 투명 배경 → hover 시 gray-10 배경 + 아이콘 색 강조 (text-secondary → text-primary).
 * 크기: m 32px(웹 기본) · l 44px(모바일/터치). 아이콘은 children으로 전달 (20px 권장).
 */
function IconButton({
  children,
  size = "m",
  disabled = false,
  active = false,
  label,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const dims = {
    s: 24,
    m: 32,
    l: 44
  };
  const d = dims[size] || dims.m;
  const bg = disabled ? "transparent" : press ? "var(--gray-20)" : hover || active ? "var(--gray-10)" : "transparent";
  const color = disabled ? "var(--text-placeholder)" : active ? "var(--brand-primary)" : hover ? "var(--text-primary)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: d,
      height: d,
      flexShrink: 0,
      border: "none",
      background: bg,
      color,
      borderRadius: "var(--radius-btn)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)",
      padding: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field. DESIGN.md §6-2.
 * Structure: Label + Field + Helper/Error. Border #CCCCCC, focus orange.
 * size: mobile 48px (default) · web-l 44 · web-m 32 · web-s 24 · search 44.
 */
const INPUT_H = {
  mobile: "var(--input-h-mobile)",
  "web-l": "var(--input-h-web-l)",
  "web-m": "var(--input-h-web-m)",
  "web-s": "var(--input-h-web-s)",
  search: "var(--input-h-search)"
};
const INPUT_FONT = {
  mobile: "var(--b2-weight) var(--b2-size)/var(--b2-line)",
  "web-l": "var(--b2-weight) var(--b2-size)/var(--b2-line)",
  "web-m": "var(--b3-weight) var(--b3-size)/var(--b3-line)",
  "web-s": "var(--s3-weight) var(--s3-size)/var(--s3-line)",
  search: "var(--b2-weight) var(--b2-size)/var(--b2-line)"
};
function Input({
  label,
  required = false,
  size = "mobile",
  helper,
  error,
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldId = id || `inp-${Math.random().toString(36).slice(2, 8)}`;
  const height = INPUT_H[size] || INPUT_H.mobile;
  const fieldFont = INPUT_FONT[size] || INPUT_FONT.mobile;
  const hPad = size === "web-s" || size === "web-m" ? "var(--space-2)" : "var(--space-4)";
  const borderColor = error ? "var(--border-error)" : focused ? "var(--border-focus)" : "var(--border-input)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      font: "var(--s2-weight) var(--s2-size)/var(--s2-line) var(--font-primary)",
      color: "var(--text-secondary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border-error)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: height,
      padding: `0 ${hPad}`,
      borderRadius: "var(--radius-input)",
      border: `1px solid ${borderColor}`,
      background: disabled ? "var(--surface-disabled)" : "var(--surface)",
      transition: "border-color var(--dur-fast) var(--ease-out)"
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--text-tertiary)"
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      font: `${fieldFont} var(--font-primary)`,
      letterSpacing: "-0.2px",
      color: disabled ? "var(--text-tertiary)" : "var(--text-primary)"
    }
  }, rest)), trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--text-tertiary)"
    }
  }, trailingIcon)), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--c1-weight) var(--c1-size)/var(--c1-line) var(--font-primary)",
      color: error ? "var(--status-error-text)" : "var(--text-tertiary)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Popover.jsx
try { (() => {
/**
 * Popover — portal-based floating layer anchored to a trigger element.
 * Renders into document.body via ReactDOM.createPortal (position:fixed), so it
 * escapes overflow:hidden/auto ancestors and local stacking contexts (modals,
 * table cells). Flips above the anchor when viewport space below is short,
 * repositions on scroll/resize, and owns the outside-click-to-close logic
 * (clicks inside anchor OR portal are "inside"). zIndex 1100 > Modal(1000).
 */
function Popover({
  open,
  anchorRef,
  onRequestClose,
  matchWidth = false,
  gap = 4,
  zIndex = 1100,
  children
}) {
  const popRef = React.useRef(null);
  const [pos, setPos] = React.useState(null);
  const update = React.useCallback(() => {
    const a = anchorRef.current;
    if (!a) return;
    const r = a.getBoundingClientRect();
    const p = popRef.current;
    const ph = p ? p.offsetHeight : 0;
    const pw = p ? p.offsetWidth : 0;
    const spaceBelow = window.innerHeight - r.bottom - gap;
    const flip = ph > 0 && spaceBelow < ph && r.top - gap > spaceBelow;
    const top = flip ? Math.max(8, r.top - gap - ph) : r.bottom + gap;
    let left = r.left;
    if (pw > 0) left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
    setPos({
      top,
      left,
      width: matchWidth ? r.width : undefined
    });
  }, [anchorRef, gap, matchWidth]);
  React.useLayoutEffect(() => {
    if (!open) {
      setPos(null);
      return;
    }
    update();
    const raf = requestAnimationFrame(update); // re-measure once panel size is known
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [open, update]);
  React.useEffect(() => {
    if (!open || !onRequestClose) return;
    const h = e => {
      const a = anchorRef.current,
        p = popRef.current;
      if (a && a.contains(e.target) || p && p.contains(e.target)) return;
      onRequestClose();
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open, onRequestClose, anchorRef]);
  if (!open) return null;
  return window.ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    ref: popRef,
    style: {
      position: "fixed",
      top: pos ? pos.top : -9999,
      left: pos ? pos.left : -9999,
      width: pos ? pos.width : undefined,
      zIndex,
      visibility: pos ? "visible" : "hidden"
    }
  }, children), document.body);
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Popover.jsx", error: String((e && e.message) || e) }); }

// components/forms/DatePicker.jsx
try { (() => {
/* ---- date helpers (no deps) ---- */
const WD = ["일", "월", "화", "수", "목", "금", "토"];
const pad = n => String(n).padStart(2, "0");
function fmtDate(d) {
  return d ? `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}` : "";
}
const sameDay = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const startOfDay = d => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);

/**
 * MonthGrid — one month of day cells. Shared by DatePicker & DateRangePicker.
 * mode "single" | "range". Selection highlighting via brand tokens.
 */
function MonthGrid({
  month,
  selected,
  rangeStart,
  rangeEnd,
  hover,
  onPick,
  onHover
}) {
  const today = startOfDay(new Date());
  const first = new Date(month.getFullYear(), month.getMonth(), 1);
  const lead = first.getDay();
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < lead; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(new Date(month.getFullYear(), month.getMonth(), d));
  const inRange = d => {
    if (!rangeStart) return false;
    const end = rangeEnd || hover;
    if (!end) return false;
    const lo = rangeStart < end ? rangeStart : end;
    const hi = rangeStart < end ? end : rangeStart;
    return d > lo && d < hi;
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 252
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      marginBottom: 4
    }
  }, WD.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "600 var(--c1-size)/1 var(--font-primary)",
      color: i === 0 ? "var(--hanwha-red-main)" : i === 6 ? "var(--hanwha-blue-main)" : "var(--text-tertiary)"
    }
  }, w))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      rowGap: 2
    }
  }, cells.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    const isSel = sameDay(d, selected) || sameDay(d, rangeStart) || sameDay(d, rangeEnd);
    const isToday = sameDay(d, today);
    const between = inRange(d);
    const isEndpoint = sameDay(d, rangeStart) || sameDay(d, rangeEnd);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        justifyContent: "center",
        background: between ? "var(--status-wait-bg)" : "transparent",
        borderRadius: isEndpoint ? 0 : 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onPick(d),
      onMouseEnter: () => onHover && onHover(d),
      style: {
        width: 32,
        height: 32,
        border: "none",
        cursor: "pointer",
        borderRadius: "var(--radius-full)",
        background: isSel ? "var(--brand-primary)" : "transparent",
        color: isSel ? "var(--on-brand)" : isToday ? "var(--brand-primary)" : "var(--text-primary)",
        font: `${isSel || isToday ? 600 : "var(--b3-weight)"} var(--b3-size)/1 var(--font-primary)`,
        boxShadow: isToday && !isSel ? "inset 0 0 0 1px var(--brand-primary)" : "none",
        transition: "background var(--dur-fast)"
      },
      onMouseOver: e => {
        if (!isSel) e.currentTarget.style.background = "var(--bg-secondary)";
      },
      onMouseOut: e => {
        if (!isSel) e.currentTarget.style.background = "transparent";
      }
    }, d.getDate()));
  })));
}

/**
 * CalendarPanel — popover shell with month header + nav. Shared.
 */
function CalendarPanel({
  view,
  onView,
  children,
  footer
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-btn)",
      boxShadow: "var(--shadow-tooltip)",
      padding: "var(--space-4)",
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onView(addMonths(view, -1)),
    style: navBtn
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--h6-weight) var(--h6-size)/1 var(--font-primary)",
      color: "var(--text-primary)"
    }
  }, view.getFullYear(), ". ", pad(view.getMonth() + 1)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onView(addMonths(view, 1)),
    style: navBtn
  }, "\u203A")), children, footer);
}
const navBtn = {
  width: 28,
  height: 28,
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: "var(--text-secondary)",
  borderRadius: "var(--radius-input)",
  font: "18px/1 var(--font-primary)"
};

/* size mirrors Input: mobile 48 (default) · web-l 44 · web-m 32 · web-s 24 · search 44. */
const FIELD_H = {
  mobile: "var(--input-h-mobile)",
  "web-l": "var(--input-h-web-l)",
  "web-m": "var(--input-h-web-m)",
  "web-s": "var(--input-h-web-s)",
  search: "var(--input-h-search)"
};
const FIELD_FONT = {
  mobile: "var(--b2-weight) var(--b2-size)/var(--b2-line)",
  "web-l": "var(--b2-weight) var(--b2-size)/var(--b2-line)",
  "web-m": "var(--b3-weight) var(--b3-size)/var(--b3-line)",
  "web-s": "var(--s3-weight) var(--s3-size)/var(--s3-line)",
  search: "var(--b2-weight) var(--b2-size)/var(--b2-line)"
};
const fieldMetrics = size => ({
  height: FIELD_H[size] || FIELD_H.mobile,
  font: `${FIELD_FONT[size] || FIELD_FONT.mobile} var(--font-primary)`,
  hPad: size === "web-s" || size === "web-m" ? "var(--space-2)" : "var(--space-4)"
});

/**
 * DatePicker — single-date field matching Input styling + calendar popover.
 */
function DatePicker({
  label,
  required = false,
  size = "mobile",
  placeholder = "날짜 선택",
  value = null,
  onChange,
  disabled = false,
  helper,
  error,
  style
}) {
  const m = fieldMetrics(size);
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState(value || new Date());
  const anchorRef = React.useRef(null);
  const close = React.useCallback(() => setOpen(false), []);
  const border = error ? "var(--border-error)" : open ? "var(--border-focus)" : "var(--border-input)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      font: "var(--s2-weight) var(--s2-size)/var(--s2-line) var(--font-primary)",
      color: "var(--text-secondary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border-error)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    ref: anchorRef
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(v => !v),
    style: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-2)",
      height: m.height,
      padding: `0 ${m.hPad}`,
      borderRadius: "var(--radius-input)",
      border: `1px solid ${border}`,
      background: disabled ? "var(--surface-disabled)" : "var(--surface)",
      cursor: disabled ? "not-allowed" : "pointer",
      font: m.font,
      letterSpacing: "-0.2px",
      color: value ? "var(--text-primary)" : "var(--text-placeholder)"
    }
  }, /*#__PURE__*/React.createElement("span", null, value ? fmtDate(value) : placeholder), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-tertiary)",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "17",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M8 2v4M16 2v4",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement(__ds_scope.Popover, {
    open: open,
    anchorRef: anchorRef,
    onRequestClose: close
  }, /*#__PURE__*/React.createElement(CalendarPanel, {
    view: view,
    onView: setView
  }, /*#__PURE__*/React.createElement(MonthGrid, {
    month: view,
    selected: value,
    onPick: d => {
      onChange && onChange(d);
      setOpen(false);
    }
  })))), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--c1-weight) var(--c1-size)/var(--c1-line) var(--font-primary)",
      color: error ? "var(--status-error-text)" : "var(--text-tertiary)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { fmtDate, MonthGrid, CalendarPanel, fieldMetrics, DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/DateRangePicker.jsx
try { (() => {
const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);

/**
 * DateRangePicker — start~end field matching Input styling.
 * Two-tap selection (start, then end); in-between days tinted.
 */
function DateRangePicker({
  label,
  required = false,
  size = "mobile",
  placeholder = "기간 선택",
  value = {},
  onChange,
  disabled = false,
  helper,
  error,
  style
}) {
  const {
    start = null,
    end = null
  } = value || {};
  const m = __ds_scope.fieldMetrics(size);
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState(start || new Date());
  const [hover, setHover] = React.useState(null);
  const anchorRef = React.useRef(null);
  const close = React.useCallback(() => setOpen(false), []);
  const pick = d => {
    if (!start || start && end) {
      onChange && onChange({
        start: d,
        end: null
      });
    } else {
      const s = d < start ? d : start;
      const e = d < start ? start : d;
      onChange && onChange({
        start: s,
        end: e
      });
      setOpen(false);
    }
  };
  const border = error ? "var(--border-error)" : open ? "var(--border-focus)" : "var(--border-input)";
  const text = start ? `${__ds_scope.fmtDate(start)}  ~  ${end ? __ds_scope.fmtDate(end) : "…"}` : placeholder;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      font: "var(--s2-weight) var(--s2-size)/var(--s2-line) var(--font-primary)",
      color: "var(--text-secondary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border-error)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    ref: anchorRef
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(v => !v),
    style: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-2)",
      height: m.height,
      padding: `0 ${m.hPad}`,
      borderRadius: "var(--radius-input)",
      border: `1px solid ${border}`,
      background: disabled ? "var(--surface-disabled)" : "var(--surface)",
      cursor: disabled ? "not-allowed" : "pointer",
      font: m.font,
      letterSpacing: "-0.2px",
      color: start ? "var(--text-primary)" : "var(--text-placeholder)"
    }
  }, /*#__PURE__*/React.createElement("span", null, text), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-tertiary)",
    strokeWidth: "1.75"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "17",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M8 2v4M16 2v4",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement(__ds_scope.Popover, {
    open: open,
    anchorRef: anchorRef,
    onRequestClose: close
  }, /*#__PURE__*/React.createElement(__ds_scope.CalendarPanel, {
    view: view,
    onView: setView
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MonthGrid, {
    month: view,
    rangeStart: start,
    rangeEnd: end,
    hover: hover,
    onPick: pick,
    onHover: setHover
  }), /*#__PURE__*/React.createElement(__ds_scope.MonthGrid, {
    month: addMonths(view, 1),
    rangeStart: start,
    rangeEnd: end,
    hover: hover,
    onPick: pick,
    onHover: setHover
  }))))), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--c1-weight) var(--c1-size)/var(--c1-line) var(--font-primary)",
      color: error ? "var(--status-error-text)" : "var(--text-tertiary)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { DateRangePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DateRangePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * Radio — 24px circle, selected inner dot orange. DESIGN §6-4 (파생).
 * Use RadioGroup-style by sharing `name` and comparing `value`.
 */
function Radio({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  value,
  id,
  style,
  size
}) {
  const sz = size || "var(--radio-size)";
  const dot = size ? "50%" : "var(--radio-dot)";
  const fieldId = id || `rd-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: sz,
      height: sz,
      borderRadius: "50%",
      flexShrink: 0,
      background: disabled ? "var(--surface-disabled)" : "var(--surface)",
      border: `1.5px solid ${checked ? "var(--brand-primary)" : disabled ? "var(--border-default)" : "var(--border-input)"}`,
      transition: "border-color var(--dur-fast)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: dot,
      height: dot,
      borderRadius: "50%",
      background: "var(--brand-primary)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--b3-weight) var(--b3-size)/var(--b3-line) var(--font-primary)",
      color: disabled ? "var(--text-tertiary)" : "var(--text-primary)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Select — dropdown trigger + option list. DESIGN.md §6-3.
 * Same field rules as Input; chevron on right. Option 48px, selected = orange check.
 * size mirrors Input: mobile 48 (default) · web-l 44 · web-m 32 · web-s 24 · search 44.
 */
const SELECT_H = {
  mobile: "var(--input-h-mobile)",
  "web-l": "var(--input-h-web-l)",
  "web-m": "var(--input-h-web-m)",
  "web-s": "var(--input-h-web-s)",
  search: "var(--input-h-search)"
};
const SELECT_FONT = {
  mobile: "var(--b2-weight) var(--b2-size)/var(--b2-line)",
  "web-l": "var(--b2-weight) var(--b2-size)/var(--b2-line)",
  "web-m": "var(--b3-weight) var(--b3-size)/var(--b3-line)",
  "web-s": "var(--s3-weight) var(--s3-size)/var(--s3-line)",
  search: "var(--b2-weight) var(--b2-size)/var(--b2-line)"
};
function Select({
  label,
  required = false,
  size = "mobile",
  placeholder = "선택하세요",
  options = [],
  value,
  onChange,
  disabled = false,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const close = React.useCallback(() => setOpen(false), []);
  const selected = options.find(o => (o.value ?? o) === value);
  const height = SELECT_H[size] || SELECT_H.mobile;
  const fieldFont = SELECT_FONT[size] || SELECT_FONT.mobile;
  const hPad = size === "web-s" || size === "web-m" ? "var(--space-2)" : "var(--space-4)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      font: "var(--s2-weight) var(--s2-size)/var(--s2-line) var(--font-primary)",
      color: "var(--text-secondary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border-error)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("button", {
    ref: anchorRef,
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(v => !v),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: height,
      padding: `0 ${hPad}`,
      borderRadius: "var(--radius-input)",
      border: `1px solid ${open ? "var(--border-focus)" : "var(--border-input)"}`,
      background: disabled ? "var(--surface-disabled)" : "var(--surface)",
      cursor: disabled ? "not-allowed" : "pointer",
      font: `${fieldFont} var(--font-primary)`,
      letterSpacing: "-0.2px",
      color: selected ? "var(--text-primary)" : "var(--text-placeholder)"
    }
  }, /*#__PURE__*/React.createElement("span", null, selected ? selected.label ?? selected : placeholder), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-tertiary)",
    strokeWidth: "1.75",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement(__ds_scope.Popover, {
    open: open,
    anchorRef: anchorRef,
    onRequestClose: close,
    matchWidth: true
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: "var(--space-1) 0",
      listStyle: "none",
      background: "var(--surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-input)",
      boxShadow: "var(--shadow-tooltip)",
      maxHeight: 240,
      overflowY: "auto"
    }
  }, options.map(o => {
    const val = o.value ?? o;
    const lbl = o.label ?? o;
    const isSel = val === value;
    return /*#__PURE__*/React.createElement("li", {
      key: val,
      onClick: () => {
        onChange && onChange(val);
        setOpen(false);
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 48,
        padding: "0 var(--space-4)",
        cursor: "pointer",
        font: `${isSel ? 400 : "var(--b3-weight)"} var(--b3-size)/var(--b3-line) var(--font-primary)`,
        color: "var(--text-primary)"
      },
      onMouseEnter: e => e.currentTarget.style.background = "var(--bg-secondary)",
      onMouseLeave: e => e.currentTarget.style.background = "transparent"
    }, lbl, isSel && /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--brand-primary)",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 13l4 4L19 7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })));
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/**
 * Breadcrumb — web-only page hierarchy. DESIGN §6-16 (PPT 확정).
 * Separator "›", passed items #CCCCCC, current page Text/Primary. Body1 (Spoqa 14px).
 * Mobile: not used (header title + back).
 */
function Breadcrumb({
  items = [],
  homeHref = "#",
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: homeHref,
    style: {
      display: "inline-flex",
      color: "var(--brand-primary)"
    },
    "aria-label": "\uD648"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l9 8h-2.5v9h-5v-6h-3v6h-5v-9H3z"
  }))), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-placeholder)",
        font: "var(--body1-weight) var(--body2-size)/1 var(--font-content)"
      }
    }, "\u203A"), last ? /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 var(--body2-size)/1 var(--font-content)",
        color: "var(--text-primary)"
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || "#",
      style: {
        font: "400 var(--body2-size)/1 var(--font-content)",
        color: "var(--text-placeholder)",
        textDecoration: "none"
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NotificationBadge.jsx
try { (() => {
/**
 * NotificationBadge — count / dot overlay for bell icons. DESIGN §6-15.
 * Count ≥16px red pill (99+ overflow); dot 8px with 1.5px surface ring.
 */
function NotificationBadge({
  count,
  dot = false,
  children,
  style
}) {
  const show = dot || typeof count === "number" && count > 0;
  const label = typeof count === "number" && count > 99 ? "99+" : count;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, children, show && (dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -3,
      right: -3,
      width: 8,
      height: 8,
      borderRadius: "var(--radius-full)",
      background: "var(--hanwha-red-main)",
      boxShadow: "0 0 0 1.5px var(--surface)"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% - 7px)",
      left: "calc(100% - 12px)",
      minWidth: 17,
      height: 17,
      padding: "0 4px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      background: "var(--hanwha-red-main)",
      color: "#ffffff",
      font: "400 var(--c2-size)/1 var(--font-primary)",
      boxShadow: "0 0 0 1.5px var(--surface)"
    }
  }, label)));
}
Object.assign(__ds_scope, { NotificationBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NotificationBadge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/MobileChrome.jsx
try { (() => {
/* Mobile chrome: 390×844 device frame, app header, bottom nav, drawer.
   Exposes PhoneFrame, MobileHeader, BottomNav, Drawer to window. */
const {
  NotificationBadge
} = window.TwinDesignSystem_fa3c4f;
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: "var(--bg-secondary)",
      borderRadius: 44,
      border: "10px solid #101114",
      boxShadow: "0 24px 70px rgba(0,0,0,0.35)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      flexShrink: 0,
      background: "var(--bg-primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 22px",
      font: "600 13px/1 var(--font-primary)",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 26,
      background: "#101114",
      borderRadius: 20,
      position: "absolute",
      left: "50%",
      top: 8,
      transform: "translateX(-50%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-signal-4g",
    style: {
      fontSize: 15
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "ti ti-wifi",
    style: {
      fontSize: 15
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "ti ti-battery-3",
    style: {
      fontSize: 16
    }
  }))), children);
}
function MobileHeader({
  title,
  onMenu,
  onBack,
  unread = 1
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 56,
      flexShrink: 0,
      background: "var(--bg-primary)",
      borderBottom: "1px solid var(--border-default)",
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
      gap: 8
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-primary)",
      display: "flex",
      padding: 4,
      marginLeft: -4
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-chevron-left",
    style: {
      fontSize: 24
    }
  })) : /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-primary)",
      display: "flex",
      padding: 4,
      marginLeft: -4
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-menu-2",
    style: {
      fontSize: 24
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--h4-weight) var(--h4-size)/1 var(--font-title)",
      letterSpacing: "var(--h4-spacing)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(NotificationBadge, {
    count: unread
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-bell",
    style: {
      fontSize: 24,
      color: "var(--text-secondary)"
    }
  }))));
}
const TABS = [{
  key: "dashboard",
  label: "홈",
  icon: "ti-home"
}, {
  key: "dispatch",
  label: "돌발배차",
  icon: "ti-truck-delivery"
}, {
  key: "work",
  label: "작업실적",
  icon: "ti-clipboard-check"
}, {
  key: "noti",
  label: "알림",
  icon: "ti-bell",
  badge: true
}];
function BottomNav({
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      height: 64,
      flexShrink: 0,
      background: "var(--surface)",
      borderTop: "1px solid var(--border-default)",
      display: "flex",
      paddingBottom: 8
    }
  }, TABS.map(t => {
    const on = t.key === active;
    const inner = /*#__PURE__*/React.createElement("i", {
      className: "ti " + t.icon,
      style: {
        fontSize: 24
      }
    });
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: () => onChange(t.key),
      style: {
        flex: 1,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        color: on ? "var(--brand-primary)" : "var(--text-tertiary)"
      }
    }, t.badge ? /*#__PURE__*/React.createElement(NotificationBadge, {
      dot: true
    }, inner) : inner, /*#__PURE__*/React.createElement("span", {
      style: {
        font: `${on ? 700 : 400} var(--c2-size)/1 var(--font-title)`
      }
    }, t.label));
  }));
}
function Drawer({
  open,
  onClose,
  active,
  onNavigate,
  onLogout
}) {
  if (!open) return null;
  const items = [{
    key: "dashboard",
    label: "대시보드",
    icon: "ti-layout-dashboard"
  }, {
    key: "dispatch",
    label: "돌발배차",
    icon: "ti-truck-delivery"
  }, {
    key: "work",
    label: "작업실적",
    icon: "ti-clipboard-check"
  }, {
    key: "obstacle",
    label: "방해요소 제보",
    icon: "ti-alert-triangle"
  }, {
    key: "noti",
    label: "알림",
    icon: "ti-bell"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.4)",
      animation: "twFade 200ms ease"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 280,
      background: "var(--bg-primary)",
      display: "flex",
      flexDirection: "column",
      animation: "twSlide 240ms var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-secondary)",
      padding: "24px 20px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "50%",
      background: "var(--surface)",
      border: "1px solid var(--border-default)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-user",
    style: {
      fontSize: 26,
      color: "var(--text-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--h6-weight) var(--h6-size)/1.3 var(--font-title)",
      color: "var(--text-primary)"
    }
  }, "\uD64D\uAE38\uB3D9"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--c1-weight) var(--c1-size)/1.4 var(--font-primary)",
      color: "var(--text-tertiary)"
    }
  }, "\uBB3C\uB958\uC6B4\uC601\uD300 \xB7 \uC9C0\uAC8C\uCC28 FL-07")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: "8px 0"
    }
  }, items.map(it => {
    const on = it.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => {
        onNavigate(it.key);
        onClose();
      },
      style: {
        width: "100%",
        height: 48,
        border: "none",
        background: on ? "var(--bg-secondary)" : "transparent",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "0 20px",
        position: "relative",
        color: on ? "var(--text-primary)" : "var(--text-secondary)",
        font: `${on ? 700 : "var(--s2-weight)"} var(--s2-size)/1 var(--font-title)`
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 10,
        bottom: 10,
        width: 3,
        background: "var(--brand-primary)"
      }
    }), /*#__PURE__*/React.createElement("i", {
      className: "ti " + it.icon,
      style: {
        fontSize: 20,
        color: on ? "var(--brand-primary)" : "var(--text-tertiary)"
      }
    }), it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-default)",
      padding: "8px 0"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: "100%",
      height: 48,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "0 20px",
      color: "var(--text-secondary)",
      font: "var(--s2-weight) var(--s2-size)/1 var(--font-primary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-settings",
    style: {
      fontSize: 20,
      color: "var(--text-tertiary)"
    }
  }), "\uC124\uC815"), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      width: "100%",
      height: 48,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "0 20px",
      color: "var(--hanwha-red-main)",
      font: "var(--s2-weight) var(--s2-size)/1 var(--font-primary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-logout",
    style: {
      fontSize: 20
    }
  }), "\uB85C\uADF8\uC544\uC6C3"))), /*#__PURE__*/React.createElement("style", null, `@keyframes twFade{from{opacity:0}to{opacity:1}}@keyframes twSlide{from{transform:translateX(-100%)}to{transform:translateX(0)}}`));
}
Object.assign(window, {
  PhoneFrame,
  MobileHeader,
  BottomNav,
  Drawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/MobileChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/MobileScreens.jsx
try { (() => {
/* Mobile screens: Login, Dashboard, Dispatch list, Dispatch detail. */
const {
  Button,
  Input,
  Card,
  KpiCard,
  StatusBadge
} = window.TwinDesignSystem_fa3c4f;
function MLogin({
  onLogin
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--bg-primary)",
      padding: "40px 24px 24px",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "\uD55C\uD654\uC624\uC158\uC5D0\uCF54\uD14D",
    style: {
      height: 30,
      alignSelf: "flex-start",
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      font: "var(--h3-weight) var(--h3-size)/var(--h3-line) var(--font-primary)",
      letterSpacing: "var(--h3-spacing)",
      color: "var(--text-primary)"
    }
  }, "\uAD00\uB9AC\uC790 \uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      font: "var(--b3-weight) var(--b3-size)/var(--b3-line) var(--font-primary)",
      color: "var(--text-secondary)"
    }
  }, "\uAD8C\uD55C\uC774 \uD5C8\uC6A9\uB41C \uC774\uC6A9\uC790\uB9CC \uC811\uC18D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\uC544\uC774\uB514",
    defaultValue: "hong.gildong",
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      className: "ti ti-user",
      style: {
        fontSize: 18
      }
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\uBE44\uBC00\uBC88\uD638",
    type: show ? "text" : "password",
    placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825",
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      className: "ti ti-lock",
      style: {
        fontSize: 18
      }
    }),
    trailingIcon: /*#__PURE__*/React.createElement("i", {
      className: "ti " + (show ? "ti-eye" : "ti-eye-off"),
      onClick: () => setShow(v => !v),
      style: {
        fontSize: 18,
        cursor: "pointer"
      }
    })
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "cta",
    fullWidth: true,
    onClick: onLogin,
    style: {
      marginTop: 28
    }
  }, "\uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 24,
      font: "var(--c1-weight) var(--c1-size)/1.7 var(--font-primary)",
      color: "var(--text-tertiary)"
    }
  }, "\uAD00\uB9AC\uC790 \uACC4\uC815 \uBB38\uC758 \xB7 \uD55C\uD654\uC624\uC158\uD300 \uD64D\uAE38\uB3D9", /*#__PURE__*/React.createElement("br", null), "010-1234-5678 \xB7 hong123@ecotech.com"));
}
function MDashboard({
  onOpenDispatch
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--h5-weight) var(--h5-size)/1.3 var(--font-primary)",
      color: "var(--text-primary)"
    }
  }, "\uC548\uB155\uD558\uC138\uC694, \uD64D\uAE38\uB3D9\uB2D8"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--c1-weight) var(--c1-size)/1.4 var(--font-primary)",
      color: "var(--text-tertiary)"
    }
  }, "2026\uB144 7\uC6D4 3\uC77C (\uAE08) \xB7 \uC9C0\uAC8C\uCC28 FL-07")), /*#__PURE__*/React.createElement("div", {
    onClick: onOpenDispatch,
    style: {
      background: "var(--surface)",
      border: "1px solid var(--border-default)",
      borderLeft: "4px solid var(--brand-primary)",
      borderRadius: "var(--radius-md)",
      padding: 16,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--h6-weight) var(--h6-size)/1 var(--font-primary)",
      color: "var(--text-primary)"
    }
  }, "\uC2E0\uADDC \uB3CC\uBC1C\uBC30\uCC28 \uC218\uC2E0"), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "wait"
  }, "\uBC30\uCC28\uB300\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--b3-weight) var(--b3-size)/1.5 var(--font-primary)",
      color: "var(--text-secondary)"
    }
  }, "A-12 \u2192 C-07 \xB7 \uBE14\uB85D B-2104-P03"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--c1-weight) var(--c1-size)/1.4 var(--font-primary)",
      color: "var(--text-tertiary)",
      marginTop: 4
    }
  }, "\uC694\uCCAD 07:40 \xB7 \uB2F4\uB2F9 \uC9C0\uAC8C\uCC28 FL-07")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "\uC624\uB298 \uBC30\uCC28",
    value: "6",
    unit: "\uAC74"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\uC644\uB8CC",
    value: "4",
    unit: "\uAC74",
    accent: "var(--status-done-text)"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\uC9C4\uD589\uC911",
    value: "1",
    unit: "\uAC74",
    accent: "var(--status-progress-text)"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\uB300\uAE30",
    value: "1",
    unit: "\uAC74",
    accent: "var(--status-wait-text)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--h5-weight) var(--h5-size)/1 var(--font-primary)",
      color: "var(--text-primary)"
    }
  }, "\uCD5C\uADFC \uC791\uC5C5\uC2E4\uC801"), /*#__PURE__*/React.createElement("button", {
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      font: "var(--c1-size) var(--font-primary)",
      color: "var(--brand-primary)"
    }
  }, "\uB354\uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, [{
    t: "블록 이송 완료",
    d: "B-2104-P03 · A-12→C-07",
    tm: "07:12",
    s: "done"
  }, {
    t: "자재 입고 처리",
    d: "자재창고 남측 · 12t",
    tm: "06:48",
    s: "done"
  }].map((r, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--h6-weight) var(--h6-size)/1.3 var(--font-primary)",
      color: "var(--text-primary)"
    }
  }, r.t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--c1-weight) var(--c1-size)/1.4 var(--font-primary)",
      color: "var(--text-secondary)"
    }
  }, r.d), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--c1-weight) var(--c1-size)/1.4 var(--font-primary)",
      color: "var(--text-tertiary)"
    }
  }, r.tm)), /*#__PURE__*/React.createElement(StatusBadge, {
    status: r.s
  }, "\uC644\uB8CC"))))));
}
const DISPATCHES = [{
  id: 1,
  title: "블록 긴급 이송",
  from: "A-12",
  to: "C-07",
  block: "B-2104-P03",
  tm: "07:40",
  eq: "지게차 FL-07",
  s: "wait",
  sl: "배차대기"
}, {
  id: 2,
  title: "자재 입고 배차",
  from: "게이트",
  to: "자재창고 남측",
  block: "WHs1",
  tm: "07:22",
  eq: "트랜스포터 TP-02",
  s: "progress",
  sl: "진행중"
}, {
  id: 3,
  title: "블록 반출",
  from: "B-2104",
  to: "안벽 3선",
  block: "B-2104-P01",
  tm: "06:55",
  eq: "지게차 FL-03",
  s: "done",
  sl: "완료"
}, {
  id: 4,
  title: "지연 배차 재확인",
  from: "C-03",
  to: "도장공장",
  block: "B-3011-P02",
  tm: "06:30",
  eq: "트랜스포터 TP-01",
  s: "error",
  sl: "지연"
}];
function MDispatchList({
  onOpen
}) {
  const [filter, setFilter] = React.useState("all");
  const chips = [{
    k: "all",
    l: "전체"
  }, {
    k: "wait",
    l: "배차대기"
  }, {
    k: "progress",
    l: "진행중"
  }, {
    k: "done",
    l: "완료"
  }];
  const rows = DISPATCHES.filter(d => filter === "all" || d.s === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      padding: "12px 16px",
      overflowX: "auto",
      flexShrink: 0
    }
  }, chips.map(c => {
    const on = c.k === filter;
    return /*#__PURE__*/React.createElement("button", {
      key: c.k,
      onClick: () => setFilter(c.k),
      style: {
        flexShrink: 0,
        height: 32,
        padding: "0 14px",
        borderRadius: "var(--radius-full)",
        cursor: "pointer",
        border: `1px solid ${on ? "var(--brand-primary)" : "var(--border-input)"}`,
        background: on ? "var(--brand-primary)" : "var(--surface)",
        color: on ? "#fff" : "var(--text-secondary)",
        font: `${on ? 400 : 300} var(--b3-size)/1 var(--font-primary)`
      }
    }, c.l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, rows.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    onClick: () => onOpen(d),
    style: {
      background: "var(--surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      padding: 16,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--h6-weight) var(--h6-size)/1 var(--font-primary)",
      color: "var(--text-primary)"
    }
  }, d.title), /*#__PURE__*/React.createElement(StatusBadge, {
    status: d.s
  }, d.sl)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      font: "var(--b3-weight) var(--b3-size)/1.5 var(--font-primary)",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", null, d.from), /*#__PURE__*/React.createElement("i", {
    className: "ti ti-arrow-right",
    style: {
      fontSize: 15,
      color: "var(--text-tertiary)"
    }
  }), /*#__PURE__*/React.createElement("span", null, d.to), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)"
    }
  }, "\xB7 ", d.block)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--c1-weight) var(--c1-size)/1.4 var(--font-primary)",
      color: "var(--text-tertiary)",
      marginTop: 4
    }
  }, "\uC694\uCCAD ", d.tm, " \xB7 ", d.eq)))));
}
function MDispatchDetail({
  item,
  onAccept
}) {
  const d = item || DISPATCHES[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--h4-weight) var(--h4-size)/1.2 var(--font-primary)",
      color: "var(--text-primary)"
    }
  }, d.title), /*#__PURE__*/React.createElement(StatusBadge, {
    status: d.s
  }, d.sl)), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [["출발 지번", d.from], ["도착 지번", d.to], ["대상 블록", d.block], ["요청 시각", d.tm], ["담당 장비", d.eq]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--s2-weight) var(--s2-size)/1 var(--font-primary)",
      color: "var(--text-tertiary)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--b2-weight) var(--b2-size)/1 var(--font-primary)",
      color: "var(--text-primary)"
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--c1-weight) var(--c1-size)/1.6 var(--font-primary)",
      color: "var(--text-tertiary)"
    }
  }, "\uC218\uB77D \uC2DC \uB2F4\uB2F9 \uC7A5\uBE44\uB85C \uBC30\uCC28\uAC00 \uD655\uC815\uB418\uBA70, \uAC70\uC808 \uC2DC \uBC30\uCC28 \uB2F4\uB2F9\uC790\uC5D0\uAC8C \uBC18\uB824 \uC0AC\uC720\uAC00 \uC804\uB2EC\uB429\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: 16,
      borderTop: "1px solid var(--border-default)",
      background: "var(--bg-primary)",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    size: "cta",
    style: {
      flex: 1
    }
  }, "\uAC70\uC808"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "cta",
    style: {
      flex: 2
    },
    onClick: onAccept
  }, "\uBC30\uCC28 \uC218\uB77D")));
}
Object.assign(window, {
  MLogin,
  MDashboard,
  MDispatchList,
  MDispatchDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/MobileScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-admin/AppShell.jsx
try { (() => {
/* Web admin shell: white GNB header + collapsible icon LNB (reference A-2).
   Exposes AppShell to window. Uses DS bundle components + Tabler webfont. */
const {
  NotificationBadge,
  Tooltip,
  IconButton
} = window.TwinDesignSystem_fa3c4f;
const NAV = [{
  key: "dashboard",
  label: "대시보드",
  icon: "ti-layout-dashboard"
}, {
  key: "jibun",
  label: "지번관리",
  icon: "ti-map-pin"
}, {
  key: "inbound",
  label: "입고예정정보",
  icon: "ti-package-import"
}, {
  key: "block",
  label: "블록현황",
  icon: "ti-box"
}, {
  key: "dispatch",
  label: "배차관리",
  icon: "ti-truck-delivery"
}, {
  key: "system",
  label: "시스템관리",
  icon: "ti-settings"
}];
function AppShell({
  active,
  onNavigate,
  breadcrumb,
  onLogout,
  children
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: "var(--bg-secondary)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--header-h-web)",
      flexShrink: 0,
      background: "var(--bg-primary)",
      borderBottom: "1px solid var(--border-default)",
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: collapsed ? "메뉴 펼치기" : "메뉴 접기",
    onClick: () => setCollapsed(v => !v)
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti " + (collapsed ? "ti-layout-sidebar-left-expand" : "ti-layout-sidebar-left-collapse"),
    style: {
      fontSize: 20
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "\uD55C\uD654\uC624\uC158\uC5D0\uCF54\uD14D",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--h5-weight) var(--h5-size)/1 var(--font-title)",
      color: "var(--text-primary)",
      marginLeft: 4
    }
  }, "\uBB3C\uB958Twin"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--s2-weight) var(--s2-size)/1 var(--font-primary)",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 400,
      color: "var(--text-primary)"
    }
  }, "\uD64D\uAE38\uB3D9"), "\uB2D8 \uB85C\uADF8\uC778 \uB418\uC5C8\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(IconButton, {
    label: "\uB85C\uADF8\uC544\uC6C3",
    onClick: onLogout
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-logout",
    style: {
      fontSize: 20
    }
  })), /*#__PURE__*/React.createElement(NotificationBadge, {
    count: 1
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "\uC54C\uB9BC"
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-bell",
    style: {
      fontSize: 20
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      width: collapsed ? "var(--lnb-w-collapsed)" : "var(--lnb-w)",
      flexShrink: 0,
      background: "var(--bg-primary)",
      borderRight: "1px solid var(--border-default)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 8px",
      transition: "width 160ms var(--ease-out)"
    }
  }, NAV.map(n => {
    const on = n.key === active;
    return /*#__PURE__*/React.createElement(Tooltip, {
      style: {
        width: "100%"
      },
      label: n.label,
      placement: "right",
      disabled: !collapsed
    }, /*#__PURE__*/React.createElement("button", {
      key: n.key,
      onClick: () => onNavigate(n.key),
      "aria-label": n.label,
      "aria-current": on ? "page" : undefined,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        height: 44,
        width: "100%",
        padding: collapsed ? 0 : "0 12px",
        justifyContent: collapsed ? "center" : "flex-start",
        margin: "2px 0",
        border: "none",
        cursor: "pointer",
        borderRadius: "var(--radius-btn)",
        background: on ? "var(--status-wait-bg)" : "transparent",
        color: on ? "var(--brand-primary)" : "var(--text-secondary)",
        font: `${on ? 700 : "var(--s2-weight)"} var(--s2-size)/1 var(--font-title)`,
        position: "relative",
        overflow: "hidden"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 8,
        bottom: 8,
        width: 3,
        borderRadius: 3,
        background: "var(--brand-primary)"
      }
    }), /*#__PURE__*/React.createElement("i", {
      className: "ti " + n.icon,
      style: {
        fontSize: 20,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: "nowrap",
        opacity: collapsed ? 0 : 1,
        maxWidth: collapsed ? 0 : 140,
        transition: "opacity 120ms var(--ease-out), max-width 160ms var(--ease-out)"
      }
    }, n.label)));
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: "auto",
      display: "flex",
      flexDirection: "column"
    }
  }, breadcrumb, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px",
      flex: 1
    }
  }, children))));
}
window.AppShell = AppShell;
window.TWIN_NAV = NAV;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-admin/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-admin/DashboardScreen.jsx
try { (() => {
/* Dashboard — reference A-2: KPI row + satellite yard map with layer panel. */
const {
  KpiCard,
  Card
} = window.TwinDesignSystem_fa3c4f;
function MapMarker({
  label,
  kind,
  x,
  y
}) {
  const colors = {
    block: "#3322f2",
    zone: "#1fd5da",
    material: "#21a3e6",
    tp: "#4a9d67",
    crane: "var(--brand-primary)",
    hazard: "var(--hanwha-red-main)"
  };
  const isBlock = kind === "block";
  const isCircle = kind === "crane" || label.startsWith("BL6");
  if (kind === "hazard") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: x + "%",
        top: y + "%",
        transform: "translate(-50%,-50%)",
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: "var(--hanwha-red-main)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,.35)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-alert-triangle-filled",
      style: {
        fontSize: 14
      }
    }));
  }
  if (kind === "icon") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: x + "%",
        top: y + "%",
        transform: "translate(-50%,-50%)",
        color: colors[label] || "#21a3e6"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-map-pin-filled",
      style: {
        fontSize: 26
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: x + "%",
      top: y + "%",
      transform: "translate(-50%,-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: colors[kind] || "#3322f2",
      color: "#fff",
      font: "600 11px/1 var(--font-primary)",
      padding: isCircle ? 0 : "4px 7px",
      width: isCircle ? 40 : "auto",
      height: isCircle ? 40 : "auto",
      borderRadius: isCircle ? "50%" : 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,.3)"
    }
  }, label));
}
function LayerCheck({
  label,
  on
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      border: on ? "none" : "1.5px solid var(--border-input)",
      background: on ? "var(--brand-primary)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, on && /*#__PURE__*/React.createElement("i", {
    className: "ti ti-check",
    style: {
      fontSize: 11,
      color: "#fff"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--b3-weight) var(--b3-size)/1 var(--font-primary)",
      color: on ? "var(--text-primary)" : "var(--text-tertiary)"
    }
  }, label));
}
function DashboardScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    web: true,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-chart-pie",
      style: {
        fontSize: 15,
        color: "var(--brand-primary)"
      }
    }), " \uC57C\uB4DC \uC810\uC720\uC728"),
    value: "82",
    unit: "%",
    caption: "\uC804\uC77C \uB300\uBE44 \u21933%"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    web: true,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-box",
      style: {
        fontSize: 15,
        color: "var(--brand-primary)"
      }
    }), " \uBE14\uB85D \uAC1C\uC18C"),
    value: "14",
    unit: "\uAC1C",
    caption: "\uC804\uC77C \uB300\uBE44 \u21912\uAC1C"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    web: true,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-transfer-in",
      style: {
        fontSize: 15,
        color: "var(--brand-primary)"
      }
    }), " \uC785\uCD9C\uACE0 \uD604\uD669"),
    value: "25",
    unit: "\uAC74",
    caption: "\uC785\uACE0\uC608\uC815 \uC790\uC7AC \xB7 \uCD9C\uACE0 8"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    web: true,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-truck",
      style: {
        fontSize: 15,
        color: "var(--brand-primary)"
      }
    }), " \uC6B4\uD589\uC911 \uC7A5\uBE44"),
    value: "20",
    unit: "\uB300",
    caption: "\uC9C0\uAC8C\uCC28 12 \xB7 \uD06C\uB808\uC778 6 \xB7 TP 2"
  })), /*#__PURE__*/React.createElement(Card, {
    web: true,
    padding: "0",
    style: {
      position: "relative",
      overflow: "hidden",
      height: 560
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/reference/dashboard-a2.png",
    alt: "\uC57C\uB4DC \uC704\uC131\uC9C0\uB3C4",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 62%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      left: 16,
      width: 168,
      background: "var(--surface)",
      borderRadius: 8,
      boxShadow: "0 4px 16px rgba(0,0,0,.12)",
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--s3-weight) var(--s3-size)/1 var(--font-primary)",
      color: "var(--text-secondary)",
      marginBottom: 8
    }
  }, "\uC9C0\uB3C4\uC720\uD615"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 34,
      border: "1px solid var(--border-input)",
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 10px",
      font: "var(--b3-size) var(--font-primary)",
      color: "var(--text-primary)",
      marginBottom: 14
    }
  }, "\uC704\uC131\uC9C0\uB3C4 ", /*#__PURE__*/React.createElement("i", {
    className: "ti ti-chevron-down",
    style: {
      fontSize: 16,
      color: "var(--text-tertiary)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--s3-weight) var(--s3-size)/1 var(--font-primary)",
      color: "var(--text-secondary)",
      marginBottom: 6
    }
  }, "\uC9C0\uB3C4\uC635\uC158"), /*#__PURE__*/React.createElement(LayerCheck, {
    label: "\uCC28\uB3C4\uC9C0\uBC88",
    on: false
  }), /*#__PURE__*/React.createElement(LayerCheck, {
    label: "CAD \uB3C4\uBA74",
    on: false
  }), /*#__PURE__*/React.createElement(LayerCheck, {
    label: "\uC9C0\uBC88 \uD45C\uC2DC",
    on: false
  }), /*#__PURE__*/React.createElement(LayerCheck, {
    label: "\uC801\uCE58 \uC5EC\uBD80",
    on: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--s3-weight) var(--s3-size)/1 var(--font-primary)",
      color: "var(--text-secondary)",
      margin: "10px 0 6px"
    }
  }, "\uD45C\uC2DC\uD56D\uBAA9"), /*#__PURE__*/React.createElement(LayerCheck, {
    label: "\uC790\uC7AC",
    on: true
  }), /*#__PURE__*/React.createElement(LayerCheck, {
    label: "\uBE14\uB85D",
    on: true
  }), /*#__PURE__*/React.createElement(LayerCheck, {
    label: "\uBC29\uD574\uC694\uC18C",
    on: true
  }), /*#__PURE__*/React.createElement(LayerCheck, {
    label: "\uC6B4\uC1A1\uC790\uC6D0",
    on: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      left: 200,
      width: 240,
      height: 34,
      background: "var(--surface)",
      borderRadius: 4,
      boxShadow: "0 4px 16px rgba(0,0,0,.12)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "0 12px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-search",
    style: {
      fontSize: 16,
      color: "var(--text-tertiary)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--b3-size) var(--font-primary)",
      color: "var(--text-placeholder)"
    }
  }, "\uAC80\uC0C9\uD560 \uB300\uC0C1 \uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-admin/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-admin/JibunScreen.jsx
try { (() => {
/* 지번관리 → 지번목록 table screen (reference 표형식 A). Filter bar + hierarchical table. */
const {
  Table,
  Select,
  Input,
  Button,
  Pagination
} = window.TwinDesignSystem_fa3c4f;
function LevelTag({
  level
}) {
  const colors = {
    L0: "var(--text-tertiary)",
    L1: "var(--hanwha-green-main)",
    L2: "var(--brand-primary)",
    L3: "var(--hanwha-green-main)",
    L4: "var(--hanwha-blue-main)",
    L5: "var(--hanwha-red-main)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 20,
      padding: "0 6px",
      borderRadius: 4,
      border: `1px solid ${colors[level]}`,
      color: colors[level],
      font: "600 11px/1 var(--font-primary)"
    }
  }, level);
}
function JibunScreen() {
  const [page, setPage] = React.useState(1);
  const cols = [{
    key: "name",
    label: "레벨 / 지번 / 명칭",
    width: "22%",
    render: (_, r) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        paddingLeft: r.depth * 18
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-chevron-down",
      style: {
        fontSize: 15,
        color: "var(--text-tertiary)"
      }
    }), /*#__PURE__*/React.createElement(LevelTag, {
      level: r.level
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 400,
        color: "var(--text-primary)"
      }
    }, r.code), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, r.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-tertiary)"
      }
    }, "(", r.count, ")"))
  }, {
    key: "id",
    label: "ID",
    numeric: true,
    width: 60
  }, {
    key: "pid",
    label: "상위 ID",
    numeric: true,
    width: 70
  }, {
    key: "pos",
    label: "시작 물리지번",
    width: 90
  }, {
    key: "use",
    label: "용도관리",
    align: "center",
    width: 70
  }, {
    key: "indoor",
    label: "옥내구분",
    align: "center",
    width: 70
  }, {
    key: "pack",
    label: "포장구분",
    align: "center",
    width: 70
  }, {
    key: "len",
    label: "최대길이(m)",
    numeric: true
  }, {
    key: "wid",
    label: "최대폭(m)",
    numeric: true
  }, {
    key: "hei",
    label: "최대높이(m)",
    numeric: true
  }, {
    key: "max",
    label: "Max중량(t)",
    numeric: true
  }, {
    key: "area",
    label: "면적(㎡)",
    numeric: true
  }, {
    key: "org",
    label: "관리조직",
    align: "center",
    width: 80
  }];
  const rows = [{
    id: 0,
    level: "L0",
    depth: 0,
    code: "HWS",
    name: "한화오션에코텍",
    count: 2,
    pid: "–",
    pos: "(0,8)",
    use: "기타",
    indoor: "옥내",
    pack: "혼합",
    len: "125",
    wid: "23",
    hei: "10",
    max: "200",
    area: "12,202",
    org: "기획팀"
  }, {
    id: 1,
    level: "L1",
    depth: 1,
    code: "HWS",
    name: "한화오션에코텍",
    count: 6,
    pid: "0",
    pos: "(0,0)",
    use: "작업장",
    indoor: "옥외",
    pack: "격자",
    len: "60",
    wid: "23",
    hei: "10",
    max: "200",
    area: "99,999",
    org: "생산관리"
  }, {
    id: 11200,
    level: "L2",
    depth: 2,
    code: "HWS",
    name: "자재창고",
    count: 2,
    pid: "1",
    pos: "(7,5)",
    use: "작업장",
    indoor: "옥내",
    pack: "격자",
    len: "60",
    wid: "23",
    hei: "10",
    max: "200",
    area: "1,380",
    org: "의장팀"
  }, {
    id: 112,
    level: "L3",
    depth: 3,
    code: "WHs1",
    name: "자재창고 남측",
    count: 6,
    pid: "11",
    pos: "(8,5)",
    use: "적치",
    indoor: "옥외",
    pack: "혼합",
    len: "30",
    wid: "11",
    hei: "8",
    max: "100",
    area: "860",
    org: "선각생산"
  }, {
    id: 2,
    level: "L4",
    depth: 4,
    code: "WHs1",
    name: "자재창고 남측",
    count: 6,
    pid: "2",
    pos: "(10,5)",
    use: "시설물",
    indoor: "옥내",
    pack: "혼합",
    len: "100",
    wid: "25",
    hei: "10",
    max: "200",
    area: "10,245",
    org: "선각생산"
  }, {
    id: 21,
    level: "L5",
    depth: 5,
    code: "WHs1",
    name: "자재창고 남측",
    count: 6,
    pid: "0",
    pos: "(30,5)",
    use: "작업장",
    indoor: "옥내",
    pack: "격자",
    len: "120",
    wid: "60",
    hei: "3",
    max: "500",
    area: "1,542",
    org: "자재관리"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 20,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uAC80\uC0C9\uD560 \uB300\uC0C1 \uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      className: "ti ti-search",
      style: {
        fontSize: 16
      }
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\uBAA8\uB4E0 level",
    options: ["모든 level", "L0", "L1", "L2", "L3"],
    value: "\uBAA8\uB4E0 level"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "\uC804\uCCB4 \uAD00\uB9AC\uC870\uC9C1",
    options: ["전체 관리조직", "기획팀", "생산관리", "자재관리"],
    value: "\uC804\uCCB4 \uAD00\uB9AC\uC870\uC9C1"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "m"
  }, "\uC870\uD68C"), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    size: "m",
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      className: "ti ti-refresh",
      style: {
        fontSize: 16
      }
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    size: "m",
    style: {
      marginLeft: "auto"
    },
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      className: "ti ti-file-spreadsheet",
      style: {
        fontSize: 16
      }
    })
  }, "Excel Export")), /*#__PURE__*/React.createElement(Table, {
    columns: cols,
    rows: rows
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: 8,
    onChange: setPage
  })));
}
window.JibunScreen = JibunScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-admin/JibunScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-admin/LoginScreen.jsx
try { (() => {
/* Login screen — reference 로그인 C (light). Centered card on subtle grid. */
const {
  Button,
  Input
} = window.TwinDesignSystem_fa3c4f;
function LoginScreen({
  onLogin
}) {
  const [id, setId] = React.useState("hong.gildong");
  const [pw, setPw] = React.useState("");
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      background: "var(--bg-primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      opacity: 0.5
    },
    preserveAspectRatio: "xMidYMid slice"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "grid",
    width: "40",
    height: "40",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40 0H0V40",
    fill: "none",
    stroke: "#f4f6f9",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#grid)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "180",
    cy: "180",
    rx: "150",
    ry: "95",
    fill: "none",
    stroke: "var(--hanwha-orange-lighter)",
    strokeWidth: "2",
    opacity: "0.5",
    transform: "rotate(-20 180 180)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "86%",
    cy: "82%",
    rx: "180",
    ry: "110",
    fill: "none",
    stroke: "var(--hanwha-orange-lighter)",
    strokeWidth: "2",
    opacity: "0.45",
    transform: "rotate(-15 1100 780)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 440,
      background: "var(--surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-btn)",
      padding: "40px 48px 44px",
      boxShadow: "0 8px 40px rgba(29,31,33,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "\uD55C\uD654\uC624\uC158\uC5D0\uCF54\uD14D",
    style: {
      height: 34
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      textAlign: "center",
      font: "var(--h3-weight) var(--h3-size)/var(--h3-line) var(--font-primary)",
      letterSpacing: "var(--h3-spacing)",
      color: "var(--text-primary)"
    }
  }, "\uAD00\uB9AC\uC790 \uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 28px",
      textAlign: "center",
      font: "var(--b3-weight) var(--b3-size)/var(--b3-line) var(--font-primary)",
      color: "var(--text-secondary)"
    }
  }, "\uAD8C\uD55C\uC774 \uD5C8\uC6A9\uB41C \uC774\uC6A9\uC790\uB9CC \uC811\uC18D\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\uC544\uC774\uB514",
    value: id,
    onChange: e => setId(e.target.value),
    placeholder: "\uC544\uC774\uB514 \uC785\uB825",
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      className: "ti ti-user",
      style: {
        fontSize: 18
      }
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\uBE44\uBC00\uBC88\uD638",
    type: show ? "text" : "password",
    value: pw,
    onChange: e => setPw(e.target.value),
    placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825",
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      className: "ti ti-lock",
      style: {
        fontSize: 18
      }
    }),
    trailingIcon: /*#__PURE__*/React.createElement("i", {
      className: "ti " + (show ? "ti-eye" : "ti-eye-off"),
      onClick: () => setShow(v => !v),
      style: {
        fontSize: 18,
        cursor: "pointer"
      }
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "cta",
    fullWidth: true,
    onClick: onLogin,
    style: {
      marginTop: 6
    }
  }, "\uB85C\uADF8\uC778")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      paddingTop: 20,
      borderTop: "1px solid var(--border-subtle)",
      font: "var(--c1-weight) var(--c1-size)/1.7 var(--font-primary)",
      color: "var(--text-tertiary)"
    }
  }, "\uAD00\uB9AC\uC790 \uACC4\uC815 \uBC0F \uC2B9\uC778\uC740 \uC544\uB798 \uB2F4\uB2F9\uC790\uC758 \uC774\uBA54\uC77C\uB85C \uBB38\uC758\uD574 \uC8FC\uC138\uC694", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)",
      fontWeight: 400
    }
  }, "Hanwha Ocean Ecotech"), " \xB7 \uD55C\uD654\uC624\uC158\uD300 \uD64D\uAE38\uB3D9", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "ti ti-phone",
    style: {
      fontSize: 12
    }
  }), " 010-1234-5678\xA0\xA0", /*#__PURE__*/React.createElement("i", {
    className: "ti ti-mail",
    style: {
      fontSize: 12
    }
  }), " hong123@ecotech.com")));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-admin/LoginScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.MonthGrid = __ds_scope.MonthGrid;

__ds_ns.CalendarPanel = __ds_scope.CalendarPanel;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.DateRangePicker = __ds_scope.DateRangePicker;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.NotificationBadge = __ds_scope.NotificationBadge;

})();
