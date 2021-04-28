import {run} from '../../../maplibre-gl-js/test/integration/lib/render';
import implementation from './suite_implementation';
import ignores from '../../../maplibre-gl-js/test/ignores.json';

run('native', ignores, implementation);
