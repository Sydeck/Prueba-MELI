import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface UserActionsProps {
  onCartClick?: () => void;
}

export default function UserActions({ onCartClick }: UserActionsProps): JSX.Element {
  return (
    <div className="hidden lg:flex items-center justify-end gap-6 text-sm text-ml-black">
      <button
        className="hover:text-ml-blue-dark"
        onClick={() =>
          (window.location.href =
            'https://www.mercadolibre.com.mx/hub/registration?from_landing=true&contextual=unified_normal&redirect_url=https%3A%2F%2Fwww.mercadolibre.com.mx%2Fnothing-phone-3a-pro-12gb-ram-256gb-rom-telefono-5g-smartphone-snapdragon-7s-gen-3-octa-cpu-677-amoled-pantalla-120hz-3000-nits-nfc-bluetooth-54-color-negro%2Fp%2FMLM50891258&entity=no_apply#nav-header')
        }
      >
        Crea tu cuenta
      </button>
      <button
        className="hover:text-ml-blue-dark"
        onClick={() =>
          (window.location.href =
            'https://www.mercadolibre.com/jms/mlm/lgz/msl/login/H4sIAAAAAAAEAzVPzQrCMAx-l5yHk4FOdvSgDyFS4prNYLqWNv4hvruZ4i35fpMXSBx5cvpMBB2g967HrFBBEtQh5uDYGxHEoMJK_zXMEswYSCkX6F5z0Eh-S2aaowaUQibCq57dIPFu2LfLMC6OHuabUNydTjcmY7-GCsZowrNqKl1dBxJeCNbNvnh87uBdWW5Rpxn7C3Sar2QNKQn3qByn33XrZrNctk3b2rBaNRtr9NQLT2SvHI7vD3wtdCD1AAAA/notregistered')
        }
      >
        Ingresa
      </button>
      <button className="hover:text-ml-blue-dark flex items-center gap-1">Mis compras</button>
      <button
        onClick={() =>
          (window.location.href =
            'https://www.mercadolibre.com/jms/mlm/lgz/msl/login/H4sIAAAAAAAEAzVPzQrCMAx-l5yHk4FOdvSgDyFS4prNYLqWNv4hvruZ4i35fpMXSBx5cvpMBB2g967HrFBBEtQh5uDYGxHEoMJK_zXMEswYSCkX6F5z0Eh-S2aaowaUQibCq57dIPFu2LfLMC6OHuabUNydTjcmY7-GCsZowrNqKl1dBxJeCNbNvnh87uBdWW5Rpxn7C3Sar2QNKQn3qByn33XrZrNctk3b2rBaNRtr9NQLT2SvHI7vD3wtdCD1AAAA/notregistered')
        }
        aria-label="Carrito"
        className="hover:text-ml-blue-dark"
      >
        <ShoppingCart className="w-6 h-6" />
      </button>
    </div>
  );
}
