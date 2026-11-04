import json
import os
import unittest

class TestSignalConstants(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'signal_constants.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_signals(self):
        self.assertEqual(self.data['SIGHUP'], 1)
        self.assertEqual(self.data['SIGINT'], 2)
        self.assertEqual(self.data['SIGKILL'], 9)
        self.assertEqual(self.data['SIGSEGV'], 11)

if __name__ == '__main__':
    unittest.main()
