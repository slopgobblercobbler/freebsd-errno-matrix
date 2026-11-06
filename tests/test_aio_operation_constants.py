import json
import os
import unittest

class TestAioConstants(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_aio_operation_constants.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_aio(self):
        self.assertEqual(self.data['AIO_CANCELED'], 1)
        self.assertEqual(self.data['LIO_WAIT'], 1)

if __name__ == '__main__':
    unittest.main()
