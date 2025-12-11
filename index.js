
const menuDisplay = function (menuDivElement, menuBtnElement, menuListElement) {
    console.log("@pm25dev Simple Drop-down Menu module loaded!")
    const menuBtn = document.querySelector(`${menuDivElement} ${menuBtnElement}`)
    const menuList = document.querySelector(`${menuDivElement} ${menuListElement}`)

    if (menuBtn && menuList) {
        const showMenuList = function () {
            menuList.style.visibility = "visible"
            menuList.style.position = "fixed"
            menuList.style.listStyle = "none"
            menuList.style.margin = "0"
            menuList.style.padding = "0"
        }

        const hideMenuList = function () {
            menuList.style.visibility = "hidden"
            menuList.style.position = "fixed"
        }

        // Hiding menu list by default
        hideMenuList()

        // Menu list shown on menu button hover
        menuBtn.addEventListener("mouseenter", () => {
        showMenuList()
        })

        menuList.addEventListener("mouseenter", () => {
            showMenuList()
        })

        // Menu list hidden on mouse leave
        menuList.addEventListener("mouseleave", () => {
            hideMenuList()
        })

        menuBtn.addEventListener("mouseleave", () => {
            hideMenuList()
        })
        
    } else { throw new Error("🔔 Waiting for valid element selectors as function parameters") }
}

module.exports = menuDisplay