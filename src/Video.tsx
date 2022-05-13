import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import { Animation } from './Animation';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={MyComposition}
				durationInFrames={60}
				fps={24}
				width={1280}
				height={720}
			/>
			<Composition
				id="Animation"
				component={Animation}
				durationInFrames={360}
				fps={24}
				width={1280}
				height={720}
			/>
		</>
	);
};
