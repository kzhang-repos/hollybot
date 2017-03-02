require 'programr'

brains = Dir.glob("lib/hollybot/*")

HOLLYBOT = ProgramR::Facade.new
HOLLYBOT.learn(brains)