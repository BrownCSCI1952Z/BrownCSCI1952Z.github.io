import { Text, useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';

export function Crazyflie() {
	const group = useRef(null);
	const { nodes, materials, animations } = useGLTF('../../public/crazyflie.glb');
	const { actions } = useAnimations(animations, group);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		Object.values(actions).forEach((a) => a?.play());
		setIsLoading(false);
	}, [actions]);

	if (isLoading) {
		return <Text fontSize={1}>Loading...</Text>;
	}

	return (
		<>
			<group>
				<group ref={group}>
					<group scale={0.3} rotation={[Math.PI / 2, -Math.PI / 2, 0]}>
						<mesh
							name="pcb_Default_sldprt"
							castShadow
							receiveShadow
							geometry={nodes.pcb_Default_sldprt.geometry}
							material={materials['Material.003']}
							position={[0.01, 0, 0]}
							scale={0.01}
						>
							<mesh
								name="propeller_ccw_Default_sldprt001"
								castShadow
								receiveShadow
								geometry={nodes.propeller_ccw_Default_sldprt001.geometry}
								material={materials['Material.004']}
								position={[33.94, 15.2, 33.85]}
								rotation={[1.56, -0.01, 0.79]}
							/>
							<mesh
								name="propeller_ccw_Default_sldprt002"
								castShadow
								receiveShadow
								geometry={nodes.propeller_ccw_Default_sldprt002.geometry}
								material={materials['Material.001']}
								position={[33.94, 15.2, -33.85]}
								rotation={[-1.56, 0.01, 0.79]}
								scale={-1}
							/>
							<mesh
								name="propeller_ccw_Default_sldprt003"
								castShadow
								receiveShadow
								geometry={nodes.propeller_ccw_Default_sldprt003.geometry}
								material={materials['Material.004']}
								position={[-33.83, 15.2, 33.32]}
								rotation={[-1.56, 0.01, 0.79]}
								scale={-1}
							/>
							<mesh
								name="propeller_ccw_Default_sldprt004"
								castShadow
								receiveShadow
								geometry={nodes.propeller_ccw_Default_sldprt004.geometry}
								material={materials['Material.004']}
								position={[-33.94, 15.2, -33.85]}
								rotation={[1.57, 0, Math.PI / 4]}
							/>
							<mesh
								name="7mm_motor_mount_Default_sldprt"
								castShadow
								receiveShadow
								geometry={nodes['7mm_motor_mount_Default_sldprt'].geometry}
								material={materials.Material}
								position={[-33.72, 3.79, -33.71]}
								rotation={[1.56, 0, 0]}
							/>
							<mesh
								name="7x15_motor_Default_sldprt"
								castShadow
								receiveShadow
								geometry={nodes['7x15_motor_Default_sldprt'].geometry}
								material={materials['Material.002']}
								position={[-33.85, -4.25, -33.74]}
								rotation={[1.56, 0, 0]}
							/>
							<mesh
								name="battery_bc-bl-01-a_Default_sldprt"
								castShadow
								receiveShadow
								geometry={nodes['battery_bc-bl-01-a_Default_sldprt'].geometry}
								material={materials['Material.006']}
								position={[-11.27, 2.54, 8.16]}
								rotation={[1.56, 0, 0]}
							/>
							<mesh
								name="battery_holder_board_Default_sldprt"
								castShadow
								receiveShadow
								geometry={nodes.battery_holder_board_Default_sldprt.geometry}
								material={materials['Material.003']}
								position={[-10.37, 9.9, 13.13]}
								rotation={[Math.PI / 2, 0, 0]}
								scale={[1, 0.97, 1]}
							/>
							<mesh
								name="header_Default_sldprt"
								castShadow
								receiveShadow
								geometry={nodes.header_Default_sldprt.geometry}
								material={materials['Material.005']}
								position={[-9.32, 4.28, -8.95]}
								rotation={[1.56, 0, -Math.PI]}
								scale={-1}
							/>
						</mesh>
						
					</group>
				</group>
			</group>
		</>
	);
}

useGLTF.preload('./crazyflie.glb');
