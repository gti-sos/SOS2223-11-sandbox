<script>
  import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "sveltestrap";
  import SvelteIcon from './SvelteIcon.svelte'
</script>

<header>
  <Navbar dark expand="md" container="fluid" style="background-color: #222222">
    <NavbarBrand href="/"><SvelteIcon /> &nbsp; <b> Sistemas Orientados a Servicios</b></NavbarBrand>

    <Nav navbar>
      <NavItem>
        <NavLink href="/" class="text-white">Inicio</NavLink>
      </NavItem>
      <Dropdown nav inNavbar>
        <DropdownToggle nav caret class="text-white">Interfaces</DropdownToggle>
        <DropdownMenu end>
          <DropdownItem
            ><NavLink href="/association-stats" class="text-black"
              >Asociaciones</NavLink
            ></DropdownItem
          >

          <DropdownItem
            ><NavLink href="/phone-line-stats" class="text-black"
              >Líneas de teléfono</NavLink
            ></DropdownItem
          >

          <DropdownItem
            ><NavLink href="/projection-homes-stats" class="text-black"
              >Proyección de hogares</NavLink
            ></DropdownItem
          >
        </DropdownMenu>
      </Dropdown>
    </Nav>
  </Navbar>
</header>

<style>
  header {
    width: 100%;
  }
</style>
